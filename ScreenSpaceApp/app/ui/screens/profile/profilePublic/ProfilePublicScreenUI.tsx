import {Center, FormControl, Input, VStack, useToast} from 'native-base';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import I18n from '../../../../assets/localization/I18n';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProfilePicture from '../../../components/ProfilePicture';
import DocumentPicker from 'react-native-document-picker';
import ky from 'ky';
import {Config} from 'react-native-config';
import {styles} from '../../../styles/theme';

const ProfilePublicScreenUI = ({}) => {
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
      const response = await ky.post(
        `${Config.API_BASE_URL}/api/uploadAvatar`,
        {
          body: data,
        },
      );
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
      <Text style={styles.headerText}> Avatar </Text>
      <ProfilePicture
        title={I18n.t('uploadPortraitPhoto')}
        onPress={selectFile}
      />
      <Center w={'90%'}>
        <FormControl isRequired>
          <FormControl.Label _text={{bold: true}}>
            {I18n.t('fullname')}
          </FormControl.Label>
          <Input
            size="md"
            keyboardType="email-address"
            inputMode="email"
            placeholder={I18n.t('fullname')}
          />
        </FormControl>
      </Center>
      <Center w={'50%'}>
        <View>
          <ButtonPrimary
            onPress={() => navigation.navigate('Login')}
            title={I18n.t('save')}
            width="300%"
          />
        </View>
      </Center>
    </VStack>
  );
};

export default ProfilePublicScreenUI;
