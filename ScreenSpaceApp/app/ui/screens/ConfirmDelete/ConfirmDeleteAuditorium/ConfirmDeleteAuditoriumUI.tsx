import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Center, VStack} from 'native-base';
import React, { useContext } from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import WarningMessage from '../../../components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';
import Config from 'react-native-config';
import { UserContext } from '../../../../UserContext';

export default function ConfirmDeleteAuditoriumUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const params = route.params;
  const authToken = user.user.token;
  const user = useContext(UserContext);

  const borrar = async () => {
    try {
      const respuesta = await ky.delete(
        `${Config.API_BASE_URL}/cinemas/${params.cinemaID}/auditoriums/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      navigation.replace('CinemasList');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VStack>
      <Center w="100%" marginBottom="10" marginTop="10">
        <WarningMessage component="Auditorium" />
      </Center>
      <Center w="100%" marginBottom="1">
        <ButtonDanger onPress={borrar} title="Delete" />
      </Center>
      <Center w="100%">
        <ButtonPrimary
          onPress={() => navigation.navigate('UpdateAuditorium')}
          title="Cancel"
        />
      </Center>
    </VStack>
  );
}
