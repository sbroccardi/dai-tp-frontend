import { Center, FormControl, Input, Image, VStack, useToast, Pressable, Icon } from 'native-base';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import I18n from '../../../assets/localization/I18n';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import OpenMapsButton from '../../components/OpenMapsButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Linking } from 'react-native';

const UpdateCinemaUI = ({ }) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [show, setShow] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [formData, setData] = React.useState({ name: '', address: '' });
  const openMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      formData.address,
    )}`;
    console.log(url);
    Linking.openURL(url);
  };


  return (
    <KeyboardAwareScrollView>
      <VStack
        space={4}
        alignItems="center"
        justifyContent="space-around"
        height="100%">
        <Center w="100%" pt={50}>
          <Image
            alt="ScreenSpace"
            source={require('../../../assets/images/popcorn.png')}
            width={116}
            height={116}
          />
        </Center>
        <Center w={'90%'}>
          <FormControl isRequired>
            {I18n.t('name')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={I18n.t('name')}
              backgroundColor={'#21242D'}
              onChangeText={value => setData({ ...formData, name: value })}
            />
            {'\n'}
            {I18n.t('address')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={I18n.t('address')}
              backgroundColor={'#21242D'}
              onChangeText={value => setData({ ...formData, address: value })}
              InputRightElement={<Pressable onPress={() => openMaps()}>
                <Icon as={<MaterialCommunityIcons name='google-maps' />} size={5} mr="2" color="muted.400" />
              </Pressable>}
            />
          </FormControl>
        </Center>
        <Center w={'100%'}>
          <ButtonDanger
            onPress={() => navigation.navigate('ConfirmDeleteCinema')}
            title={I18n.t('delete')}
            width="150px"
          />
        </Center>
        <Center w={'100%'}>
          <ButtonPrimary
            onPress={() => console.log(formData.address)}
            title={I18n.t('save')}
            width="90%"
          />
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default UpdateCinemaUI;
