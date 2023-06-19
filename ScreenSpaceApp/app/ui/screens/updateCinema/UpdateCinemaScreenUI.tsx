import {
  Center,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {View, Switch, TouchableOpacity, Button, Linking} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import I18n from '../../../assets/localization/I18n';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import {styles} from '../../styles/theme';
import OpenMapsButton from '../../components/OpenMapsButton';

const UpdateCinemaScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [formData, setData] = React.useState({name: '', address: ''});

  return (
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
            onChangeText={value => setData({...formData, name: value})}
          />
          {'\n'}
          {I18n.t('address')}
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('address')}
            backgroundColor={'#21242D'}
            onChangeText={value => setData({...formData, address: value})}
          />
        </FormControl>
        {'\n'}
        <OpenMapsButton address={formData.address} />
      </Center>
      <Center w={'100%'}>
        <ButtonDanger
          onPress={() => navigation.navigate('ConfirmDeleteCinema')}
          title={I18n.t('delete')}
          width="80%"
        />
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary
          onPress={() => console.log(formData.address)}
          title={I18n.t('save')}
          width="80%"
        />
      </Center>
    </VStack>
  );
};

export default UpdateCinemaScreenUI;
