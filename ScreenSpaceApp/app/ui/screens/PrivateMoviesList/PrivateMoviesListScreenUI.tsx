import { Center, ScrollView, Text, VStack } from 'native-base';
import React, { useEffect } from 'react';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import ky from 'ky';
import Config from 'react-native-config';

type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PrivateMoviesScreenUI: React.FC<Props> = ({ navigation }) => {
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

  useEffect(() => {
    const fetchScreenings = async () => {
      try{
        //traer todas las screenings
      }
      catch(err){
        console.error(err);
      }
    }

    const fetchMoviesByIds = async () => {
      try {
        const response = await ky.get(
          `${Config.API_BASE_URL}/movies`
        );
        const responseObject = await response.json();
        
      }
      catch (err) {
        console.error(err)
      }
    }
  }, [])

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
            {renderMovies()}
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
