import { Center, VStack, Text, ScrollView } from 'native-base';
import React, { useEffect, useState } from 'react';
import CardAuditorium from '../../components/CardAuditorium';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import ky from 'ky';
import I18n from '../../../assets/localization/I18n';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Config from 'react-native-config';

export default function AuditoriumListUI({ route }) {
  const [auditoriumsData, setAuditoriumsData] = useState([
    {
      cinemaId: '',
      name: '',
      rows: 0,
      SeatsPerRow: 0
    }
  ]);

  const cineId = route.params.cinemaId;
  const cineName = route.params.cinemaName

  useEffect(() => {
    getAuditoriums();
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  //const {cinemaName} = route.params

    const [flag, setFlag] = React.useState(0);

   const getAuditoriums = async () => {
     setFlag(1);
     try {
       //const cinemaId = user.user.id;
       const response = await ky.get(
         `${Config.API_BASE_URL}/cinemas/${cineId}/auditoriums`,
       );
       const responseBody = await response.json();
       const auditoriumsData = responseBody.filter((document: { cineId: any; }) => document.cineId === cineId).map((document: { cinemaId: any; name: any; rows: any; seatsPerRow: any }) => ({
         cinemaId: document.cinemaId,
         name: document.name,
         rows: document.rows,
         seatsPerRow: document.seatsPerRow
       }));
       setAuditoriumsData(auditoriumsData);
       console.log(auditoriumsData);
 
     }
     catch (err) {
       console.error('error: ', err);
     }
   };
 
   if (flag == 0) {
     getAuditoriums()
   };

   const renderAuditoriums = () => {
    const elements = [];
    for (let count = 0; count < auditoriumsData.length; count++) {
      const auditorium = auditoriumsData[count];
      elements.push(
        <Center>
          <CardAuditorium auditoriumName={auditorium.name}
            auditoriumSize ={`${auditorium.rows} rows of ${auditorium.SeatsPerRow} seats`}
            auditoriumAvailability='?'
            onPressCard={() => navigation.navigate('UpdateAuditorium', { params: { auditoriumName: auditorium.name, rows: auditorium.rows, seats: auditorium.SeatsPerRow } })} />
        </Center>);
    }
    return elements;
  };

  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center>
        <Text>{cineName}</Text>
      </Center>
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <ScrollView maxH="450">
          <VStack space={4} alignItems="center" height="100%">
            <Center>
              {
                renderAuditoriums()
              }
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center width="100%">
        <ButtonPrimary title={I18n.t('createAuditoriums')} onPress={() => navigation.navigate('CreateAuditorium', {params: {cinemaId: cineId}})} />
      </Center>
    </VStack>
  );
}
