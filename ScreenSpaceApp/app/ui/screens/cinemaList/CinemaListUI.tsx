import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ky from 'ky';
import { responseTypes } from 'ky/distribution/core/constants';
import { Center, Text, VStack } from 'native-base';
import React, { useContext } from 'react';
import Config from 'react-native-config';
import I18n from '../../../assets/localization/I18n';
import { UserContext } from '../../../UserContext';
import ButtonPrimary from '../../Components/ButtonPrimary';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CinemaListUI: React.FC<Props> = ({ navigation }) => {
  const [formData, setData] = React.useState([
    {
      name: '',
      location: '',
    }
  ]);
  const { setUser } = useContext(UserContext);
  const user = useContext(UserContext);

  const getCinemas = async () => {
    try {
      const authToken = user.user.token;
      const response = await ky.get(
        'http://192.168.1.82:3000/cinemas',
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      ).json();
      console.log(response);
      const cinemasData = response.map((document) => ({
        name: document.name,
        location: document.location,
      }));

      setData(cinemasData);
    }
    catch (err) {
      console.error('error: ', err);
    }

  };

  getCinemas();

  return (
    <VStack>
      <Center w={'100%'}>
        <ButtonPrimary onPress={() => navigation.navigate('CreateCinemaStack')} title={I18n.t('createCinema')} />
      </Center>
    </VStack>
  );
};

export default CinemaListUI;

