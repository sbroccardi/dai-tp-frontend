import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ky from 'ky';
import { responseTypes } from 'ky/distribution/core/constants';
import { Center, ScrollView, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import Config from 'react-native-config';
import I18n from '../../../assets/localization/I18n';
import { UserContext } from '../../../UserContext';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardCinema from '../../components/CardCinema';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CinemaListUI: React.FC<Props> = ({ navigation }) => {

  const [flag, setFlag] = React.useState(0);
  const [formData, setData] = React.useState([
    {
      id: '',
      name: '',
      location: '',
    }
  ]);
  const user = useContext(UserContext)

  const getCinemas = async () => {
    setFlag(1);
    try {
      const userId = user.user.id;
      console.log(userId);
      const response = await ky.get(
        'http://192.168.0.92:3000/cinemas',
      );
      const responseBody = await response.json();
      console.log(responseBody);
      const cinemasData = responseBody.filter((document: { userId: any; }) => document.userId == userId).map((document: { _id: any; name: any; location: any; }) => ({
        id: document._id,
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
  }

  const renderCinemas = () => {
    const elements = [];
    for (let count = 0; count < formData.length; count++) {
      const cine = formData[count];
      elements.push(
        <Center>
          <CardCinema cinemaName={cine.name}
            cinemaAuditoriumsAmount={undefined}
            onPressEdit={() => navigation.navigate('UpdateCinema',{id:cine.id})}
            onPressCard={() => navigation.navigate('AuditoriumsStack', { params: { cinemaName: cine.name, cinemaId: cine.id } })} />
        </Center>);
    }
    return elements;
  };

  return (
    <VStack>
      <Center>
        <ScrollView maxH="600">
          <VStack space={4}>
            {
              renderCinemas()
            }
          </VStack>
        </ScrollView>
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary onPress={() => navigation.navigate('CreateCinemaStack')} title={I18n.t('createCinema')} />
      </Center>
    </VStack>
  );
};

export default CinemaListUI;

