import {ParamListBase, useNavigation} from '@react-navigation/native';
import {Box, Center, Text, VStack, View} from 'native-base';
import React from 'react';
import {styles} from '../../../styles/theme';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ButtonDanger from '../../../components/ButtonDanger';
import I18n from '../../../../assets/localization/I18n';
import WarningMessage from '../../../components/WarningMessage';
import ToolbarPrivateUser from '../../../components/ToolbarPrivateUser';
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
