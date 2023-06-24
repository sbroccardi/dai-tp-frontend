import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ky from 'ky';
import { responseTypes } from 'ky/distribution/core/constants';
import { Center, Text, VStack } from 'native-base';
import React from 'react';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const renderCinemas = async () => {
  try {
    const response = await ky.get('http://192.168.1.82:3000/cinemas');
    const data = response.json();
    console.log(data);
  }
  catch(error){
    console.error(error);
  }
}

renderCinemas();

const CinemaListUI: React.FC<Props> = ({ navigation }) => {
  
  return (
    <VStack>
      <Center w={'100%'}>
        <ButtonPrimary onPress={() => navigation.navigate('CreateCinemaStack')} title={I18n.t('createCinema')} />
      </Center>
    </VStack>
  );
};

export default CinemaListUI;
