//import { View } from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Center, Flex, FormControl, Input, VStack, useToast} from 'native-base';
import DocumentPicker from 'react-native-document-picker';
import ky from 'ky';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import ProfilePicture from '../../components/ProfilePicture';

const SignUpScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});
  const [singleFile, setSingleFile] = React.useState(null);

  const validate = () => {
    setErrors({});

    // Company
    if (formData.company.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        company: 'Company is required',
      }));
      return false;
    } else if (formData.company.length < 3) {
      setErrors(prevErrors => ({
        ...prevErrors,
        company: 'Company is too short',
      }));
      return false;
    }

    // Email
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;

    if (formData.email.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    } else if (!emailRegex.test(formData.email)) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is not valid',
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

  const selectFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      //setSingleFile(res);
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', res);
      const response = await ky.post('http://localhost:3000/api/uploadAvatar', {
        body: data,
      });
      console.log(response);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
      } else {
        //For Unknown Error
        throw err;
      }
      toast.show({
        description: JSON.stringify(err),
        title: 'Unknown Error',
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
      <Center w="100%">
        <Flex direction="column">
          <Center pt="5%">
            <FormControl>
              <ProfilePicture
                title={I18n.t('uploadPortraitPhoto')}
                onPress={selectFile}
              />
            </FormControl>
          </Center>
          <Center pt="10%">
            <FormControl isRequired>
              <FormControl.Label _text={{bold: true}}>
                {I18n.t('company')}
              </FormControl.Label>
              <Input
                size="md"
                placeholder={I18n.t('enterCompany')}
                onChangeText={value => setData({...formData, company: value})}
              />
              <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
                Error Company
              </FormControl.ErrorMessage>
            </FormControl>
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
            <FormControl isRequired>
              <FormControl.Label _text={{bold: true}}>
                {I18n.t('password')}
              </FormControl.Label>
              <Input
                size="md"
                placeholder={I18n.t('enterPassword')}
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
            <FormControl isRequired pt="5%">
              <FormControl.Label _text={{bold: true}}>
                {I18n.t('confirmPassword')}
              </FormControl.Label>
              <Input
                size="md"
                placeholder={I18n.t('enterPassword')}
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
        </Flex>
      </Center>
      <Center w="100%">
        <ButtonPrimary onPress={onSubmit} title={I18n.t('signUp')} />
      </Center>
    </VStack>
  );
};

export default SignUpScreenUI;
