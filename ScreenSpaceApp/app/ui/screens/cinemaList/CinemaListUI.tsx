import {ParamListBase, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';
import {responseTypes} from 'ky/distribution/core/constants';
import {Center, ScrollView, Text, VStack} from 'native-base';
import React, {useContext} from 'react';
import Config from 'react-native-config';
import I18n from '../../../assets/localization/I18n';
import {UserContext} from '../../../UserContext';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardCinema from '../../components/CardCinema';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CinemaListUI: React.FC<Props> = ({navigation}) => {
  const [cinemasFlag, setCinemasFlag] = React.useState(0);
  const [formData, setData] = React.useState([
    {
      id: '',
      name: '',
      location: '',
    },
  ]);
  const user = useContext(UserContext);
  const getCinemas = async () => {
    setCinemasFlag(1); //este flag evita que la llamada se haga en loop
    try {
      const userId = user.user.id;
      console.log('UserId:' + userId)
      const response = await ky.get(
        `${Config.API_BASE_URL}/cinemas`,
      );
      const responseBody = await response.json();
      const cinemasData = responseBody
        .filter((document: {userId: any}) => document.userId == userId)
        .map((document: {_id: any; name: any; location: any}) => ({
          id: document._id,
          name: document.name,
          location: document.location,
        }));
      setData(cinemasData);
    } catch (err) {
      console.error('error: ', err);
    }
  };
  cinemasFlag == 0 ? getCinemas() : undefined;

  /*const getCinemaAuditoriumsAmount = async (cinemaId: any) => {
    try {
      const response = await ky.get(`http://192.168.1.82:3000/cinemas/${cinemaId}/auditoriums`);
      const responseBody = await response.json();
      return responseBody.length;
    }
    catch (err) {
      console.error('ERROR:',err);
    }
  };*/

  const renderCinemas = () => {
    const elements = [];
    for (let count = 0; count < formData.length; count++) {
      const cine = formData[count];
      //const auditoriumsAmount = await getCinemaAuditoriumsAmount(cine.id);
      //console.log(auditoriumsAmount);
      elements.push(
        <Center>
          <CardCinema
            cinemaName={cine.name}
            cinemaAuditoriumsAmount={'2'}
            onPressEdit={() =>
              navigation.replace('UpdateCinema', {cinemaId: cine.id})
            }
            onPressCard={() =>
              navigation.navigate('AuditoriumList', {
                cinemaName: cine.name,
                cinemaId: cine.id,
              })
            }
          />
        </Center>,
      );
    }
    return elements;
  };

  return (
    <VStack>
      <Center>
        <ScrollView maxH="600">
          <VStack space={4}>{renderCinemas()}</VStack>
        </ScrollView>
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary
          onPress={() => navigation.navigate('CreateCinemaStack')}
          title={I18n.t('createCinema')}
        />
      </Center>
    </VStack>
  );
};

export default CinemaListUI;
