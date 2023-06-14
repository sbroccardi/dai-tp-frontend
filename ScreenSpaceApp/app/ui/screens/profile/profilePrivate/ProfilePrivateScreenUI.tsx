import {
    Center,
    FormControl,
    Input,
    Image,
    VStack,
    useToast,
  } from 'native-base';
  import React from 'react';
  import {NativeStackNavigationProp} from '@react-navigation/native-stack';
  import {ParamListBase, useNavigation} from '@react-navigation/native';
  import { View, TextInput, StyleSheet,Text } from 'react-native';
  import I18n from '../../../../assets/localization/I18n';
  import ButtonLogout from '../../../components/ButtonLogout';
  import FooterMenu from '../../../components/FooterMenu';
  import ButtonDanger from '../../../components/ButtonDanger';
  import ButtonPrimary from '../../../components/ButtonPrimary';
  import ProfilePicture from '../../../components/ProfilePicture';
  import DocumentPicker from 'react-native-document-picker';
  import ky from 'ky';
  import {styles} from '../../../styles/theme';
  
  const ProfilePrivateScreenUI = ({}) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const toast = useToast();
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

    return(
      <VStack
      space={6}
      alignItems="center"
      justifyContent="space-around"
      height="100%"
      >
      <Center w="100%" pt={50}>
        
      </Center>
      <Text style = {styles.headerText}> Avatar </Text>
      <ProfilePicture title={I18n.t('uploadPortraitPhoto')} onPress={selectFile} />
      <Center w={'90%'}>
        <FormControl isRequired >
            {I18n.t('username')}
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('username')}
          />
          {"\n"}
            {I18n.t('emailAddress')}
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('emailAddress')}
          />
        </FormControl>
      </Center>
      <ButtonPrimary onPress={() => navigation.navigate('Login')} title ={I18n.t('save')} width='90%'  />
      <Center w={'50%'}>
       <View style={styles.buttonsContainer} >
          <ButtonDanger onPress={() => navigation.navigate('Login')} title={I18n.t('delete')} />
          <ButtonLogout onPress={() => navigation.navigate('Login')} title={I18n.t('logout')} />
        </View>
      </Center>
      <FooterMenu selected={2}/>
    </VStack>
    
  );
};
  
  export default ProfilePrivateScreenUI;
  