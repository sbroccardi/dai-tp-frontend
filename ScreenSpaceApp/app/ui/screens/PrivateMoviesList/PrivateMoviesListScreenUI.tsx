import {Center, ScrollView, Text, VStack} from 'native-base';
import React from 'react';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import ky from 'ky';

type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PrivateMoviesScreenUI: React.FC<Props> = ({navigation}) => {
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [moviesData, setMoviesData] = React.useState([
    {
      id: '',
      genre: '',
      name: '',
      age: '',
      rating: '',
    },
  ]);

  const [flag, setFlag] = React.useState(0);
  const getmovies = async () => {
    setFlag(1);
    try {
      //const cinemaId = user.user.id;
      const response = await ky.get(
        `${Config.API_BASE_URL}/movies`,
      );
      const responseBody = await response.json();
      console.log(responseBody);
      const moviesData = responseBody.map(
        (document: {
          id: string;
          genre: string;
          name: string;
          rating: any;
          age: string;
        }) => ({
          id: document.id,
          genre: document.genre,
          name: document.name,
          rating: document.rating,
          age: document.age,
        }),
      );
      setMoviesData(moviesData);
    } catch (err) {
      console.error('error: ', err);
    }
  };

  const renderMovies = () => {
    const elements = [];
    for (let count = 0; count < moviesData.length; count++) {
      const movie = moviesData[count];
      elements.push(
        <Center marginBottom="4">
          <CardMovie
            movieID={movie.id}
            movieName={movie.name}
            movieAge={movie.age}
            movieRating={movie.rating}
          />
        </Center>,
      );
    }
    return elements;
  };

  return (
    <VStack space={3} alignItems="center" height="100%">
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <ScrollView maxH="500">
          <VStack space={3} alignItems="center" height="100%">
            <Center marginBottom="4">
              <CardMovie
                movieID="1"
                movieName="Oppenheimer"
                movieAge="+16"
                movieRating="5"
              />
            </Center>
            <Center marginBottom="4">
              <CardMovie
                movieID="1"
                movieName="Interstellar"
                movieAge="+13"
                movieRating="3"
              />
            </Center>
            <Center marginBottom="4">
              <CardMovie
                movieID="1"
                movieName="Inception"
                movieAge="+13"
                movieRating="5"
              />
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center width="100%">
        <ButtonPrimary
          title="Create screening"
          onPress={() =>
            navigation.navigate('CreateScreeningStack', {
              screen: 'CreateScreening',
            })
          }
        />
      </Center>
    </VStack>
  );
};

export default PrivateMoviesScreenUI;
