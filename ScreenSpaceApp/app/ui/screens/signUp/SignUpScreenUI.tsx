//import { View } from 'react-native';
import React from 'react';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Center, Flex, FormControl, Input, VStack, useToast} from 'native-base';
import DocumentPicker, {
  DocumentPickerResponse,
} from 'react-native-document-picker';
import ky from 'ky';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import ProfilePicture from '../../components/ProfilePicture';
import {Config} from 'react-native-config';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUpScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [data, setData] = React.useState({
    company: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = React.useState({});
  const [imageIsLoading, setImageIsLoading] = React.useState({});
  const [imageUrl, setImageUrl] = React.useState('');
  const [singleFile, setSingleFile] = React.useState(null);

  const validate = () => {
    setErrors({});

    // Company
    if (data.company.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        company: 'Company is required',
      }));
      return false;
    } else if (data.company.length < 3) {
      setErrors(prevErrors => ({
        ...prevErrors,
        company: 'Company is too short',
      }));
      return false;
    }

    // Email
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;

    if (data.email.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Email is required',
      }));
      return false;
    } else if (!emailRegex.test(data.email)) {
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
      //navigation.navigate('Movies');
      signUp();
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

  const signUp = async () => {
    console.log(Config.API_BASE_URL);
    const response = await ky.post(`${Config.API_BASE_URL}/users`, {
      json: {
        avatar: imageUrl,
        fullname: '',
        company: data.company,
        address: '',
        email: data.email,
        password: data.password,
        refreshToken: '',
      },
    });
    console.log(response);
  };

  const selectFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const results = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(results));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      //Setting the state to show single file attributes
      //setSingleFile(res);
      console.log(
        `URI: ${results[0].uri}\nType: ${results[0].type}\nName: ${results[0].name}\nSize: ${results[0].size}`,
      );
      handleUploadImage(results[0]);
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

  const handleUploadImage = async (newImage: DocumentPickerResponse) => {
    console.log('started: ', newImage.uri);
    setImageIsLoading(true);

    const formData = new FormData();
    formData.append('file', {
      uri: newImage.uri,
      type: newImage.type,
      name: newImage.name,
    });
    formData.append('upload_preset', 'default-unsigned-preset');
    formData.append(
      'public_id',
      data.email
        ? data.email.replace('@', '_at_')
        : newImage.name?.split('.')[0],
    );

    try {
      const response = await ky.post(`${Config.CLOUDINARY_URL}`, {
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      setImageUrl(data.url);
    } catch (error) {
      console.error('Upload failed', error);
    } finally {
      setImageIsLoading(false);
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
          <Flex direction="column">
            <Center pt="5%">
              <FormControl>
                <ProfilePicture
                  title={I18n.t('uploadPortraitPhoto')}
                  onPress={selectFile}
                  imgUrl={imageUrl}
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
                  onChangeText={value => setData({...data, company: value})}
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
                  onChangeText={value => setData({...data, email: value})}
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
                  onChangeText={value => setData({...data, password: value})}
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
                    setData({...data, confirmPassword: value})
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
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreenUI;
