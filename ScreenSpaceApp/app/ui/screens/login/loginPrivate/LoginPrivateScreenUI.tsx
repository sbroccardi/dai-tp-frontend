import {
  Center,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import I18n from '../../../../assets/localization/I18n';
import ButtonPrimary from '../../../components/ButtonPrimary';

const LoginPrivateScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    setErrors({});

    // Email
    if (formData.email.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;

    if (!emailRegex.test(formData.email)) {
      console.log('Email is not valid!!');
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is not valid',
      }));
      return false;
    }

    // Password
    if (formData.password.length < 8) {
      setErrors(prevErrors => ({
        ...prevErrors,
        password: 'Password is required',
      }));
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('Movies');
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
    <VStack
      space={4}
      alignItems="center"
      justifyContent="space-around"
      height="100%">
      <Center w="100%" pt={50}>
        <Image
          alt="ScreenSpace"
          source={require('../../../../assets/images/popcorn.png')}
          width={116}
          height={116}
        />
      </Center>
      <Center w={'90%'}>
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>
            {I18n.t('email')}
          </FormControl.Label>
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('enterEmail')}
            onChangeText={value => setData({...formData, email: value})}
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Email
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired pt={5}>
          <FormControl.Label _text={{bold: true}}>
            {I18n.t('password')}
          </FormControl.Label>
          <Input
            size="md"
            placeholder={I18n.t('enterPassword')}
            type="password"
            keyboardType="default"
            onChangeText={value => setData({...formData, password: value})}
          />
          <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
            Error Password
          </FormControl.ErrorMessage>
        </FormControl>
      </Center>
      <Center w={'100%'}>
        <ButtonPrimary onPress={onSubmit} title={I18n.t('login')} />
        <Text
          pt={5}
          color={'yellow.400'}
          onPress={() => navigation.navigate('RecoverPassword')}>
          {I18n.t('forgotPassword')}
        </Text>
      </Center>
      <Center w={'100%'}>
        <Text fontWeight={'normal'} color={'gray.400'}>
          {I18n.t('newToScreenSpace')}
          <Text
            color={'yellow.400'}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            {I18n.t('signUp')}
          </Text>
        </Text>
      </Center>
    </VStack>
  );
};

export default LoginPrivateScreenUI;
