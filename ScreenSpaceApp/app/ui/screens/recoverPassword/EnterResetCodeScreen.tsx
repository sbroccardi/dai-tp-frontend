import React, {useRef, useState} from 'react';
import {
  Center,
  FormControl,
  HStack,
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

const EnterResetCodeScreen = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [resetCode, setResetCode] = useState(['', '', '', '']);
  const inputRefs = useRef<(typeof Input | null)[]>([]);
  const [errors, setErrors] = React.useState({});

  const handleResetCodeChange = (index: number, value: string) => {
    setResetCode(prevState => {
      const newState = [...prevState];
      newState[index] = value;
      return newState;
    });
    if (value.length === 1) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value.length === 0) {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const validate = () => {
    setErrors({});

    // Check if all digits have been entered
    if (resetCode.some(digit => digit.length === 0)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        resetCode: 'All digits must be entered',
      }));
      return false;
    }

    // Check if all digits are numbers
    if (resetCode.some(digit => isNaN(Number(digit)))) {
      setErrors(prevErrors => ({
        ...prevErrors,
        resetCode: 'All digits must be numbers',
      }));
      return false;
    }

    return true;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('EnterNewPassword');
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
            {I18n.t('enterResetCode')}
          </Heading>
        </Center>
        <Center w="90%">
          <FormControl isRequired>
            <HStack space={3} justifyContent="center">
              {resetCode.map((digit, index) => (
                <Center w={20} key={`reset-code-digit-${index}`}>
                  <Input
                    size={'2xl'}
                    //w={10}
                    m={2}
                    value={digit}
                    onChangeText={value => handleResetCodeChange(index, value)}
                    maxLength={1}
                    keyboardType="numeric"
                    ref={ref => {
                      inputRefs.current[index] = ref;
                    }}
                    style={{textAlign: 'center'}}
                  />
                </Center>
              ))}
            </HStack>
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Code
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Center w="100%">
          <ButtonPrimary onPress={onSubmit} title={I18n.t('confirmCode')} />
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default EnterResetCodeScreen;
