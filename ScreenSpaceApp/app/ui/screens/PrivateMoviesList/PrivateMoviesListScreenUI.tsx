import { Center, ScrollView, Text, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { UserContext } from '../../../UserContext';
import ky from 'ky';
import Config from 'react-native-config';

type HomeScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const PrivateMoviesScreenUI: React.FC<Props> = ({ navigation }) => {
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [movieIdsThatHaveScreenings, setMovieIdsThatHaveScreenings] = React.useState<string[]>([])
  const [moviesData, setMoviesData] = React.useState([]);
  const user = useContext(UserContext);
  const [moviesForm, setMoviesForm] = React.useState([
   
  ]);

  useEffect(() => {
    const fetchMovieIdsThatHaveScreenings = async () => {
      try {
        const authToken = user.user.token;
        const response = await ky.get(`${Config.API_BASE_URL}/movies`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const responseObject = await response.json();
        setMoviesData(responseObject)
        const movieIds = responseObject.map((movie: { _id: any }) => movie._id)
        const movieIdsWithScreenings = [];

        for (const movieId of movieIds) {
          const screeningsResponse = await ky.get(`${Config.API_BASE_URL}/movies/${movieId}/screenings`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          const screeningsData = await screeningsResponse.json();

          if (Array.isArray(screeningsData) && screeningsData.length > 0) {
            movieIdsWithScreenings.push(movieId);
          }
        }
        console.log('moviesWithScreenings: ', movieIdsWithScreenings);
        setMovieIdsThatHaveScreenings(movieIdsWithScreenings);
      } catch (error) {
        console.error('Error retrieving screenings:', error);
      }
    }; fetchMovieIdsThatHaveScreenings()

    const fetchMoviesData = async () => {
      try {
        const authToken = user.user.token;
        const response = await ky.get(`${Config.API_BASE_URL}/movies`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const movies = await response.json();
        console.log('movies data: ', movies)
        const filteredMovies = [];
        for (const movieId of movieIdsThatHaveScreenings) {
          const movie = movies.find((movie: { _id: string }) => movie._id === movieId);
          if (movie) {
            filteredMovies.push(movie);
          }
        }
        setMoviesForm(filteredMovies);
      } catch (error) {
        console.error(error);
      }
    }; fetchMoviesData()

  }, [])

  const renderMovies = () => {
    const elements = [];
    for (let count = 0; count < moviesForm.length; count++) {
      const movie = moviesForm[count];
      console.log('element: ', movie)
      elements.push(
        <Center marginBottom="4">
          <CardMovie
            movieID={movie._id}
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
