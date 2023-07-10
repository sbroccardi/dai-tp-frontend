import {Center, Image, ScrollView, VStack} from 'native-base';
import React, { useContext, useEffect } from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useRoute} from '@react-navigation/native';
import CardScreeningPublic from '../../components/CardScreeningPublic';
import ky from 'ky';
import Config from 'react-native-config';
import { UserContext } from '../../../UserContext';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function ListScreeningUIPublic({navigation}) {
  const route = useRoute();
  const user = useContext(UserContext);
  const movieID = route.params.movieId;
  const movieName = route.params.movieName;
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const [cinemaOptions, setCinemaOptions] = React.useState([''])
  const [cinemaIds, setCinemaIds] = React.useState([]);
  const [cinemaScreenings, setCinemaScreenings] = React.useState<{ _id: any; cinemaName: string; cinemaId: string; auditoriumName: string; datetime: string }[]>([]);
  const [cinemasData, setCinemasData] = React.useState([])


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
      headerTitle: movieName,
    })
    const fetchCinemaOptions = async () => {
      try {
        const authToken = user.user?.tokens.accessToken;
        const userId = user.user?.id;
        const response = await ky.get('https://screenspace.azurewebsites.net/cinemas',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          },
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
        setCinemasData(responseObject);
      } catch (error) {
        console.error('Error retrieving cinema options: ', error);
      }
    };
    fetchCinemaOptions();

  }, []);

  useEffect(() => {
    const fetchCinemaScreenings = async () => {
      try {
        const authToken = user.user?.tokens.accessToken;
        const responseScreenings = await ky.get(
          `${Config.API_BASE_URL}/movies/${movieID}/screenings`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const responseScreeningsObject = await responseScreenings.json();
        const elements = []
        for (const screening of responseScreeningsObject) {
          const screeningId = screening._id;
          const screeningDatetime = screening.datetime;
          const screeningAuditoriumId = screening.auditoriumId;
          const screeningCinemaId = screening.cinemaId
          console.log('objeto armado ids: ', screeningDatetime, screeningCinemaId, screeningAuditoriumId)
          const screeningAuditorium = await ky.get(`${Config.API_BASE_URL}/cinemas/auditoriums/${screeningAuditoriumId}`,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            })
          const screeningAuditoriumObject = await screeningAuditorium.json()
          const screeningAuditoriumName = screeningAuditoriumObject.name;
          const screeningCinemaName = cinemasData
            .find((cine: { _id: string }) => cine._id == screeningCinemaId)?.name
          console.log('screeningCinemaName: ', screeningCinemaName)
          console.log(screeningAuditoriumName)
          elements.push({
            _id: screeningId,
            cinemaName: screeningCinemaName,
            cinemaId: screeningCinemaId,
            auditoriumName: screeningAuditoriumName,
            datetime: screeningDatetime
          })
        }
        setCinemaScreenings(elements)
      } catch (error) {
        console.error('Error retrieving cinema screenings:', error);
      }
    };

    fetchCinemaScreenings();
  }, [cinemasData, movieID]);

  console.log('cinemaScreenings: ', cinemaScreenings)

  const renderData = (searchQuery?:string) => {
    if (searchQuery) {
      const filteredScreenings = cinemaScreenings.filter((screening) =>
        screening.cinemaName === searchQuery
      );
      const elements = [];
      for (let count = 0; count < Object.keys(filteredScreenings).length; count++) {
        //console.log(auditoriumsAmount);
        const screening = filteredScreenings[count];
        console.log('element filteredRenderData: ', screening)
        elements.push(
          <Center key={count}>
            <CardScreeningPrivate
              cinema={screening.cinemaName}
              auditorium={screening.auditoriumName}
              date={screening.datetime}
              onPress={() => navigation.replace('ConfirmDeleteScreening', { movieId: movieID, movieName: movieName, screeningId: screening._id })} />
          </Center>,
        );
        return elements;
      }
    }
    else {
      const elements = [];
      console.log('cinemaScreeningslength: ', cinemaScreenings.length)
      for (let count = 0; count < Object.keys(cinemaScreenings).length; count++) {
        //console.log(auditoriumsAmount);
        const screening = cinemaScreenings[count];
        console.log('element renderData: ', screening)
        elements.push(
          <Center key={count}>
            <CardScreeningPrivate
              cinema={screening.cinemaName}
              auditorium={screening.auditoriumName}
              date={screening.datetime}
              onPress={() => navigation.replace('ConfirmDeleteScreening', { movieId: movieID, movieName: movieName, screeningId: screening._id })} />
          </Center>,
        );
      }
      return elements;
    }
  };

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
                onPress={() => navigation.navigate("BuyTickets", {movieName: movieName, movieId: movieID})}
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