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
  const [movieIdsThatHaveScreenings, setMovieIdsThatHaveScreenings] = React.useState([])


  const [moviesData, setMoviesData] = React.useState([
    {
      _id: '',
      name: '',
      age: '',
      rating: '',
    },
  ]);

  useEffect(() => {
    const fetchMovieIdsThatHaveScreenings = async () => {
      try {
        const response = await ky.get(`${Config.API_BASE_URL}/movies`);
        const responseObject = await response.json();
        const movieIds = responseObject.map((movie: { _id: any }) => movie._id)
        const moviesWithScreenings = await Promise.all(
          movieIds
            .filter(async (_id: any) => {
              const r = await ky.get(`${Config.API_BASE_URL}/movies/${_id}/screenings`);
              const rObject = await r.json();
              return Array.isArray(rObject) && rObject.length > 0;
            })
            .map(async (_id: any) => {
              const r = await ky.get(`${Config.API_BASE_URL}/movies/${_id}/screenings`);
              const rObject = await r.json();
              const movieIdThatHaveScreenings = rObject
                .filter((document: { movieId: any; }) => document.movieId === _id)
                .map((document: { movieId: any; }) => document.movieId);
              console.log(`movieId that have screenings ${_id}: `, movieIdThatHaveScreenings);
              return movieIdThatHaveScreenings;
            })
        );
        const data = moviesWithScreenings.filter((movieId: any) => movieId && movieId.length > 0);
        console.log('movie ids that have screenings: ' + data)
        setMovieIdsThatHaveScreenings(data);
      } catch (error) {
        console.error('Error retrieving screenings:', error);
      }
    }; fetchMovieIdsThatHaveScreenings()

    const fetchMoviesData = async () => {
      try {
        const response = await ky.get(`${Config.API_BASE_URL}/movies`);
        const movies = await response.json();
        const filteredMovies = []
        for(let count=0; count<movieIdsThatHaveScreenings.length; count++){
          const idFilter = movieIdsThatHaveScreenings[count]
          const moviesData = movies
          .filter((movie:{_id:any}) => movie._id===idFilter)
          .map(
            (document: {
              _id: string;
              name: string;
              age: string;
              rating: any;
            }) => ({
              _id: document._id,
              name: document.name,
              age: document.age,
              rating: document.rating,
              
            }),
          );
          filteredMovies.push(moviesData)
        }
        setMoviesData(filteredMovies)
        console.log('moviesData: ', moviesData)
      } catch (error) {
        console.error(error);
      }
    };fetchMoviesData()
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
            {/*renderMovies()*/}
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
