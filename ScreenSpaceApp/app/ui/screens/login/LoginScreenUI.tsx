import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Center, Image, Text, VStack} from 'native-base';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import React from 'react';

const LoginScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <VStack
      space={4}
      alignItems="center"
      justifyContent="space-between"
      height="100%">
      <Center w={'100%'} pt={100}>
        <Image
          alt="ScreenSpace"
          source={require('../../../assets/images/popcorn.png')}
          width={188}
          height={188}
        />
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary
          onPress={() => navigation.navigate('LoginPublic')}
          title={I18n.t('loginButton')}
          isDisabled
        />
      </Center>
      <Center w={'100%'} pb={2}>
        <Text fontWeight={'normal'} color={'gray.400'}>
          {I18n.t('loginAs')}
          <Text
            color={'yellow.400'}
            onPress={() => navigation.navigate('LoginPrivate')}>
            {' '}
            {I18n.t('cinema')}
          </Text>
        </Text>
      </Center>
    </VStack>
  );
};

export default LoginScreenUI;
