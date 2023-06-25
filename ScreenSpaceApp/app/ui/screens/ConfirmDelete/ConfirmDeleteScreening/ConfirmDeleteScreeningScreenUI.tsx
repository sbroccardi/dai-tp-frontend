import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Center, VStack} from 'native-base';
import React from 'react';
import ButtonPrimary from '../../../Components/ButtonPrimary';
import ButtonDanger from '../../../Components/ButtonDanger';
import WarningMessage from '../../../Components/WarningMessage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function ConfirmDeleteScreeningScreenUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <VStack>
      <Center w="100%" marginBottom="10" marginTop="10">
        <WarningMessage component="Screening" />
      </Center>
      <Center w="100%" marginBottom="1" marginLeft="-2">
        <ButtonDanger onPress={undefined} title="Delete" />
      </Center>
      <Center w="100%">
        <ButtonPrimary onPress={() => navigation.goBack()} title="Cancel" />
      </Center>
    </VStack>
  );
}
