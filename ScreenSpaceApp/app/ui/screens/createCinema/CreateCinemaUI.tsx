import {
  Center,
  FormControl,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React from 'react';
import {styles} from '../../styles/theme';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function CreateCinemaUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({name: '', location: ''});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    setErrors({});

    // Email
    if (formData.name.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Name es required',
      }));
      return false;
    }

    // Rows
    if (formData.location.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        rows: 'Location is required',
      }));
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('ProfilePrivate');
    } else {
      console.log(errors);

      toast.show({
        description: Object.values(errors).join('\n'),
        title: 'Error',
        duration: 3000,
        placement: 'top',
      });
    }
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
          <FormControl.Label _text={{bold: true}}>
            {I18n.t('cinema')}
          </FormControl.Label>
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('enterNameCinema')}
            onChangeText={value => setData({...formData, name: value})}
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Name
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired pt={5}>
          <FormControl.Label _text={{bold: true}}>
            {I18n.t('adress')}
          </FormControl.Label>
          <Input
            size="md"
            placeholder={I18n.t('enterLocation')}
            type="text"
            keyboardType="default"
            onChangeText={value => setData({...formData, location: value})}
            InputRightElement={
              <Pressable marginRight="5">
                <Icon name="add-location-alt" size={15} color="#FFFFFF" />
              </Pressable>
            }
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Adress
          </FormControl.ErrorMessage>
        </FormControl>
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary onPress={undefined} title={I18n.t('save')} />
      </Center>
    </VStack>
    </KeyboardAwareScrollView>
  );
}
