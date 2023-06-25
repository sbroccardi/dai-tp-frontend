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

export default function AuditoriumListUI({ route }) {
  const [auditorios, setAuditorios] = useState([]);
  useEffect(() => {
    //obtenerAuditorios(); // Llamamos a la función para obtener los auditorios al cargar la pantalla
  }, []);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  //const {cinemaName} = route.params

  /* const getCinemas = async () => {
     setFlag(1);
     try {
       const userId = user.user.id;
       const response = await ky.get(
         'http://192.168.1.82:3000/cinemas',
       );
       const responseBody = await response.json();
       const cinemasData = responseBody.filter((document: { userId: any; }) => document.userId === userId).map((document: { _id: any; name: any; location: any; }) => ({
         id: document.id,
         name: document.name,
         location: document.location
       }));
       setData(cinemasData);
       console.log(cinemasData);
 
     }
     catch (err) {
       console.error('error: ', err);
     }
   };
 
   if (flag == 0) {
     getCinemas()
   }*/

  /*const renderAuditoriums = () => {
    const elements = [];
    for (let count = 0; count < formData.length; count++) {
      const cine = formData[count];
      elements.push(<CardAuditorium
        auditoriumName="Sala 7"
        auditoriumAvailability="Disponible"
        auditoriumSize="12 rows of 7 seats" onPressCard={navigation}/>);
    }
    return elements;
  };*/

  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center>
        <Text>{undefined}</Text>
      </Center>
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <ScrollView maxH="450">
          <VStack space={4} alignItems="center" height="100%">
            <Center>
              {
                /*renderAuditoriums()*/
              }
              <CardAuditorium
                auditoriumName="Sala 7"
                auditoriumAvailability="Disponible"
                auditoriumSize="12 rows of 7 seats" onPressCard={()=>navigation.navigate('UpdateAuditorium')} />;
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center width="100%">
        <ButtonPrimary title={I18n.t('createAuditoriums')} onPress={() => navigation.navigate('CreateAuditorium')} />
      </Center>
    </VStack>
  );
}
