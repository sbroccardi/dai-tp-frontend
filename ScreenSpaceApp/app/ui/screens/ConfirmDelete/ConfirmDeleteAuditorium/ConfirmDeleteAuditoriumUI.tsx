import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Center, VStack} from 'native-base';
import React from 'react';
import ButtonPrimary from '../../../Components/ButtonPrimary';
import ButtonDanger from '../../../Components/ButtonDanger';
import WarningMessage from '../../../Components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ConfirmDeleteAuditoriumUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <VStack>
      <Center w="100%" marginBottom="10" marginTop="10">
        <WarningMessage component="Auditorium" />
      </Center>
      <Center w="100%" marginBottom="1">
        <ButtonDanger
          onPress={() => navigation.navigate('ConfirmDeleteAuditorium')}
          title="Delete"
        />
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
