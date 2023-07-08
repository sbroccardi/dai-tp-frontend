import {Center, Image, ScrollView, VStack} from 'native-base';
import React, { useEffect } from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import CardScreeningPublic from '../../components/CardScreeningPublic';
import ky from 'ky';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function ListScreeningUIPublic({route, navigation}) {
  const {movieID} = route.params.movieId;
  const cinemaOptions = ['Hoyts Belgrano', 'Abasto', 'Cinemark Palermo'];
  const [selectedCinema, setSelectedCinema] = React.useState('');

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
              <CardScreeningPublic
                cinema="Hoyts Belgrano"
                auditorium="Sala 7"
                date="Saturday, 21.07.23 - 16:00"
                onPress={() => navigation.navigate("BuyTickets")}
              />
            </Center>
            <Center>
              <CardScreeningPublic
                cinema="Cinemark Palermo"
                auditorium="Sala 3"
                date="Sunday, 17.08.23 - 19:30" 
                onPress={undefined} />
            </Center>
            <Center>
              <CardScreeningPublic
                cinema="Abasto"
                auditorium="Sala 12"
                date="Tuesday, 12.06.23 - 16:00"
                onPress={undefined}
              />
            </Center>
          </VStack>
        </ScrollView>
      </Center>
    </VStack>
  );
}