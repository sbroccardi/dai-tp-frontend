import { Center, Image, ScrollView, Text, VStack } from 'native-base';
import React, { useContext, useEffect } from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ky from 'ky';
import { UserContext } from '../../../UserContext';
import { typesAreEqual } from 'react-native-document-picker/lib/typescript/fileTypes';
import Config from 'react-native-config';
import { styles } from '../../styles/theme';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function ListScreeningUIPrivate({ route, navigation }) {
  const movieID = route.params.movieId;
  const movieName = route.params.movieName;
  const user = useContext(UserContext);
  const [cinemaOptions, setCinemaOptions] = React.useState([''])
  const [cinemaIds, setCinemaIds] = React.useState([]);
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const [cinemaScreenings, setCinemaScreeningsS] = React.useState([{
    cinemaName: '',
    auditoriumName: '',
    datetime: ''
  }]);

  const handleCinemaChange = (value: any) => {
    console.log('Cinema id en listScreening: ' + value);
    setSelectedCinema(value);
    //traer funciones del cine
    try {
      
    }
    catch (err) {
      console.error('Error retrieving cinema screens' + err);
    }
  };
  //{JSON.stringify(movieID)}
  useEffect(() => {
    navigation.setOptions({
      headerTitle:route.params.movieName
  })
    const fetchCinemaOptions = async () => {
      try {
        const authToken = user.user.token;
        const userId = user.user.id;
        const response = await ky.get('https://screenspace.azurewebsites.net/cinemas',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const responseObject = await response.json();
        const names = responseObject
          .filter((document: { userId: any }) => document.userId == userId)
          .map((cinema: any) => cinema.name);
        setCinemaOptions(names);
        //
        const ids = responseObject
          .filter((document: { userId: any }) => document.userId == userId)
          .map((cinema: { _id: any; }) => cinema._id)
        setCinemaIds(ids)
        //
      } catch (error) {
        console.error('Error retrieving cinema options: ', error);
      }
    };
    fetchCinemaOptions();

    const fetchScreenings = async () => {
      try {
        const authToken = user.user.token;
        const response = await ky.get(`${Config.API_BASE_URL}/cinemas/${movieID}/screenings`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        const responseObject = await response.json();
        console.log('screenings de la pelicula: ' + responseObject);
      }
      catch (err) {
        console.error('Error retrieving screenings ', err)
      }
    };
    fetchScreenings();
  }, []);

  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center w="100%" borderRadius="12">
        <Image
          alt="ScreenSpace"
          borderRadius="12"
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          width={350}
          height={110}
        />
      </Center>
      <Center>
        <DropdownMenu
          purpose={'Cinema'}
          disabled={undefined}
          data={cinemaIds}
          options={cinemaOptions}
          onChange={handleCinemaChange}
        />
      </Center>
      <Center>
        <ScrollView maxH="350">
          <VStack>
            <Center>
              <CardScreeningPrivate
                cinema="Hoyts Belgrano"
                auditorium="Sala 7"
                date="Saturday, 21.07.23 - 16:00"
              />
            </Center>
            <Center>
              <CardScreeningPrivate
                cinema="Cinemark Palermo"
                auditorium="Sala 3"
                date="Sunday, 17.08.23 - 19:30"
              />
            </Center>
            <Center>
              <CardScreeningPrivate
                cinema="Abasto"
                auditorium="Sala 12"
                date="Tuesday, 12.06.23 - 16:00"
              />
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center w="100%">
        <ButtonPrimary
          title="Create screening"
          onPress={() => navigation.navigate('CreateScreeningStack')}
        />
      </Center>
    </VStack>
  );
}
