import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Center, VStack} from 'native-base';
import React from 'react';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import WarningMessage from '../../../components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ConfirmDeleteCinemaUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <VStack>
      <Center w="100%" marginBottom="10" marginTop="10">
        <WarningMessage component="Cinema" />
      </Center>
      <Center w="100%" marginBottom="1">
        <ButtonDanger
          onPress={() => navigation.navigate('ConfirmDeleteCinema')}
          title="Delete"
        />
      </Center>
      <Center w="100%">
        <ButtonPrimary
          onPress={() => navigation.navigate('UpdateCinema')}
          title="Cancel"
        />
      </Center>
    </VStack>
  );
}
