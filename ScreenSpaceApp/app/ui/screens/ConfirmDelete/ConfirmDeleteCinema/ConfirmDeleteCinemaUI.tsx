import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import {Center, VStack} from 'native-base';
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import WarningMessage from '../../../components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ky from 'ky';

export default function ConfirmDeleteCinemaUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const route = useRoute();
  const id = route.params.id;

  const borrar = async () => {
    try {
      const respuesta = await ky.delete(
        `https://screenspace.azurewebsites.net/cinemas/${id}`,
      );
      console.log(respuesta);
      navigation.replace('CinemasList');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <VStack>
      <Center w="100%" marginBottom="10" marginTop="10">
        <WarningMessage component="Cinema" />
      </Center>
      <Center w="100%" marginBottom="1">
        <ButtonDanger onPress={borrar} title="Delete" />
      </Center>
      <Center w="100%">
        <ButtonPrimary
          onPress={() => navigation.navigate('UpdateCinema', {id: id})}
          title="Cancel"
        />
      </Center>
    </VStack>
  );
}
