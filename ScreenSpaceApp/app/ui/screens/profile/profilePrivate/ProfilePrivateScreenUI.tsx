import {Center, FormControl, Input, VStack, useToast} from 'native-base';
import React, {useContext} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {View, Text} from 'react-native';
import I18n from '../../../../assets/localization/I18n';
import ButtonLogout from '../../../components/ButtonLogout';
import ButtonDanger from '../../../components/ButtonDanger';
import ButtonPrimary from '../../../components/ButtonPrimary';
import ProfilePicture from '../../../components/ProfilePicture';
import DocumentPicker from 'react-native-document-picker';
import ky from 'ky';
import {styles} from '../../../styles/theme';
import {Config} from 'react-native-config';
import {UserContext} from '../../../../UserContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RefreshControl} from 'react-native';

const ProfilePrivateScreenUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const user = useContext(UserContext);
  const {setUser} = useContext(UserContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [formData, setData] = React.useState({
    email: '',
    username: '',
    img: ' ',
  });
  const [email, setEmail] = React.useState('');
  const [username, setUsername] = React.useState('');

  const exit = () => {
    setUser(null);
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('res : ' + JSON.stringify(res));

      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', res);
      const authToken = user.user?.tokens.accessToken;
      const response = await ky.post(`${Config.API_BASE_URL}/uploadAvatar`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        body: data,
      });
      console.log(response);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
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
      email: responseBody.email,
      username: responseBody.fullname,
      img: responseBody.avatar,
    });
  };

  const updateData = async () => {
    let data = {
      email: email,
      fullname: username,
    };
    if (username === '' && email !== '') {
      data = {
        email: email,
        fullname: formData.username,
      };
    }
    if (username !== '' && email === '') {
      data = {
        email: formData.email,
        fullname: username,
      };
    }
    if (username !== '' && email !== '') {
      data = {
        email: email,
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

  if (formData.email === '') {
    getData();
  }

  return (
    <KeyboardAwareScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getData} />
      }>
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
            {I18n.t('emailAddress')}
            {email !== '' && (
              <Input
                size="md"
                keyboardType="email-address"
                inputMode="email"
                placeholder={formData.email}
                backgroundColor={'#21242D'}
                onChangeText={value => setEmail(value)}
              />
            )}
            {email === '' && (
              <Input
                size="md"
                keyboardType="email-address"
                inputMode="email"
                placeholder={formData.email}
                backgroundColor={'#21242D'}
                onChangeText={value => setEmail(value)}
              />
            )}
          </FormControl>
        </Center>
        <ButtonPrimary
          onPress={updateData}
          title={I18n.t('save')}
          width="90%"
        />
        <Center w={'50%'}>
          <View style={styles.buttonsContainer}>
            <ButtonDanger
              onPress={() => navigation.replace('ConfirmDelete')}
              title={I18n.t('delete')}
              width="65%"
            />
            <ButtonLogout onPress={exit} title={I18n.t('logout')} />
          </View>
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default ProfilePrivateScreenUI;
