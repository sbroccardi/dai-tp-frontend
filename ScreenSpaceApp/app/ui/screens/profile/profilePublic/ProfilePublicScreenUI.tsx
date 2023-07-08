import {Center, FormControl, Input, VStack, useToast} from 'native-base';
import React, {useContext} from 'react';
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
import {UserContext} from '../../../../UserContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ButtonDanger from '../../../components/ButtonDanger';
import {RefreshControl} from 'react-native/Libraries/Components/RefreshControl/RefreshControl';
import ButtonLogout from '../../../components/ButtonLogout';

const ProfilePublicScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const user = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [formData, setData] = React.useState({
    username: '',
    img: ' ',
  });
  const [username, setUsername] = React.useState('');
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
      const response = await ky.post(`${Config.API_BASE_URL}/uploadAvatar`, {
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
  const getData = async () => {
    const authToken = user.user?.tokens.accessToken;
    const respuesta = await ky.get(
      `${Config.API_BASE_URL}/users/${user.user?.id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      },
    );
    const responseBody = await respuesta.json();
    setData({
      ...formData,
      username: responseBody.fullname,
      img: responseBody.avatar,
    });
  };
  const updateData = async () => {
    let data = {
      fullname: username,
    };
    if (username === '') {
      data = {
        fullname: formData.username,
      };
    }
    if (username !== '') {
      data = {
        fullname: username,
      };
    }
    const authToken = user.user?.tokens.accessToken;
    const respuesta = await ky.put(`${Config.API_BASE_URL}/users`, {
      json: data,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    getData();
  };
  if (formData.username === '') {
    getData();
  }
  const exit = () => {
    setUser(null);
  };

  return (
    <VStack
      space={8}
      alignItems="center"
      justifyContent="space-around"
      height="100%">
      <Text style={styles.headerText}> Avatar </Text>
      <ProfilePicture
        title={I18n.t('uploadPortraitPhoto')}
        onPress={selectFile}
        imgUrl={formData.img}
      />
      <Center w={'90%'}>
        <FormControl isRequired>
          {I18n.t('username')}
          {username === '' && (
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.username}
              backgroundColor={'#21242D'}
              onChangeText={value => setUsername(value)}
            />
          )}
          {username !== '' && (
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.username}
              backgroundColor={'#21242D'}
              onChangeText={value => setUsername(value)}
            />
          )}
          {'\n'}
        </FormControl>
      </Center>
      <ButtonPrimary
        onPress={() => navigation.navigate('Previous Purchase')}
        title={'Previous Purchase'}
        width="90%"
      />
      <ButtonPrimary onPress={updateData} title={I18n.t('save')} width="90%" />
      <Center w={'50%'}>
        <View style={styles.buttonsContainer}>
          <ButtonDanger
            onPress={() => navigation.navigate('ConfirmDelete')}
            title={I18n.t('delete')}
            width="65%"
          />
          <ButtonLogout onPress={exit} title={I18n.t('logout')} />
        </View>
      </Center>
    </VStack>
  );
};

export default ProfilePublicScreenUI;
