import {Center, FormControl, Image, Input, VStack, useToast} from 'native-base';
import React from 'react';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function CreateAuditoriumUI() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({
    nameAuditorium: '',
    rows: '',
    seats: '',
  });
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    setErrors({});

    // Email
    if (formData.nameAuditorium.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Name es required',
      }));
      return false;
    }

    // Rows
    if (formData.rows.length < 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        rows: 'Number of rows is required',
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
        <Center w="100%">
          <ToolbarPrivateUser title="Create Auditorium" onPress={undefined} />
        </Center>
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
              {I18n.t('nameAuditorium')}
            </FormControl.Label>
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={I18n.t('enterNameAuditorium')}
              onChangeText={value =>
                setData({...formData, nameAuditorium: value})
              }
            />
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Name
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormControl.Label _text={{bold: true}}>
              {I18n.t('rows')}
            </FormControl.Label>
            <Input
              size="md"
              placeholder={I18n.t('enterRows')}
              type="text"
              keyboardType="default"
              onChangeText={value => setData({...formData, rows: value})}
            />
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Rows
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isRequired pt={5}>
            <FormControl.Label _text={{bold: true}}>
              {I18n.t('seats')}
            </FormControl.Label>
            <Input
              size="md"
              placeholder={I18n.t('enterSeats')}
              type="text"
              keyboardType="default"
              onChangeText={value => setData({...formData, seats: value})}
            />
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Seats
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
