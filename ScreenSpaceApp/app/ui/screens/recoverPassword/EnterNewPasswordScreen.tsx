import React from 'react';
import {
  Center,
  FormControl,
  Heading,
  Input,
  VStack,
  useToast,
} from 'native-base';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonPrimary from '../../Components/ButtonPrimary';
import I18n from '../../../assets/localization/I18n';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const EnterNewPasswordScreen = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    setErrors({});

    // Password
    if (
      formData.password.length === 0 ||
      formData.confirmPassword.length === 0
    ) {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: 'Password is required',
      }));
      return false;
    } else if (
      formData.password.length < 8 ||
      formData.confirmPassword.length < 8
    ) {
      setErrors(prevErrors => ({
        ...prevErrors,
        name: 'Password is too short',
      }));
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('LoginPrivate');
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
        <Center>
          <Heading size="xl" mb="4">
            {I18n.t('enterNewPassword')}
          </Heading>
        </Center>
        <Center w="90%">
          <FormControl isRequired>
            <FormControl.Label _text={{bold: true}}>
              {I18n.t('password')}
            </FormControl.Label>
            <Input
              size="md"
              type="password"
              onChangeText={value => setData({...formData, password: value})}
            />
            <FormControl.HelperText _text={{fontSize: 'xs'}}>
              {I18n.t('helpPassword')}
            </FormControl.HelperText>
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Password
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label _text={{bold: true}}>
              {I18n.t('confirmPassword')}
            </FormControl.Label>
            <Input
              size="md"
              type="password"
              onChangeText={value =>
                setData({...formData, confirmPassword: value})
              }
            />
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Password
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Center w="100%">
          <ButtonPrimary onPress={onSubmit} title={I18n.t('changePassword')} />
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default EnterNewPasswordScreen;
