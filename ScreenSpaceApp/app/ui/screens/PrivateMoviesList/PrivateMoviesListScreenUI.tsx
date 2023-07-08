import { Center, ScrollView, Text, VStack, Spinner } from 'native-base';
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
const LoadingScreen = () => {
  return (
    <Center>
      <Spinner accessibilityLabel="Loading" color="white"s/>
    </Center>
  );
};

const PrivateMoviesScreenUI: React.FC<Props> = ({ navigation }) => {
  //const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();]
  const [isLoading, setIsLoading] = React.useState(true);
  const [movieIdsThatHaveScreenings, setMovieIdsThatHaveScreenings] = React.useState<string[]>([])
  const [moviesData, setMoviesData] = React.useState([]);
  const user = useContext(UserContext);
  const [moviesForm, setMoviesForm] = React.useState<{ _id: string; name: string; age: string; rating: string; }[]>([]);
  const authToken = user.user.token;


  useEffect(() => {
    const fetchMovieIdsThatHaveScreenings = async () => {
      try {
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
        setIsLoading(false);
      } catch (error) {
        console.error('Error retrieving screenings:', error);
        setIsLoading(false);
      }
    }; fetchMovieIdsThatHaveScreenings();
  }, [])

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
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
        console.error('error fetching movies data:', error);
      }
    }; fetchMoviesData()
  }, [movieIdsThatHaveScreenings])

  const renderMovies = () => {
    const elements = [];
    for (let count = 0; count < moviesForm.length; count++) {
      const movie = moviesForm[count];
      console.log('element: ', movie)
      elements.push(
        <Center marginBottom="4" key={movie._id}>
          <CardMovie
            movieID={movie._id}
            movieName={movie.name}
            movieAge={movie.age}
            movieRating={movie.rating}
            onPress={()=>navigation.navigate('ScreeningList', {movieName:movie.name, movieId: movie._id})}
          />
        </Center>,
      );
    }
    return elements;
  };

  return (
    <VStack space={3} alignItems="center" height="100%">
      <Center>
        <SearchBar/>
      </Center>
      <Center>
        <ScrollView maxH="500">
          <VStack space={3} alignItems="center" height="100%">
            {
              isLoading ? 
              <LoadingScreen/>
              :
              renderMovies()
            }
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
