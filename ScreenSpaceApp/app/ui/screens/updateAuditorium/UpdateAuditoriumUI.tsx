import {
  Center,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React, {useState} from 'react';
import {View, Switch} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import I18n from '../../../assets/localization/I18n';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import {styles} from '../../styles/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ky from 'ky';

const UpdateAuditoriumUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [formData, setData] = React.useState({name: '', rows: '', seats: ''});
  const route = useRoute();
  const params = route.params;
  const [name, setName] = React.useState(' ');
  const [rows, setRows] = React.useState(' ');
  const [seats, setSeats] = React.useState(' ');
  const [bandera, setBandera] = React.useState(false);

  const traerDatos = async () => {
    const respuesta = await ky.get(
      `http://192.168.0.92:3000/cinemas/${params.cinemaID}/auditoriums/${params.id}`,
    );
    const responseBody = await respuesta.json();
    setData({
      ...formData,
      name: responseBody.name,
      rows: responseBody.rows,
      seats: responseBody.seatsPerRow,
    });
  };
  const updatearDatos = async () => {
    let data = {
      name: name,
      rows: rows,
      seats: seats,
    };
    if (name === '' && rows === '' && seats !== '') {
      data = {
        name: formData.name,
        rows: formData.rows,
        seats: seats,
      };
    }
    if (name === '' && rows !== '' && seats === '') {
      data = {
        name: formData.name,
        rows: rows,
        seats: formData.seats,
      };
    }
    if (name !== '' && rows === '' && seats === '') {
      data = {
        name: name,
        rows: formData.rows,
        seats: formData.seats,
      };
    }
    if (name === '' && rows !== '' && seats !== '') {
      data = {
        name: formData.name,
        rows: rows,
        seats: seats,
      };
    }
    if (name !== '' && rows === '' && seats !== '') {
      data = {
        name: name,
        rows: formData.rows,
        seats: seats,
      };
    }
    if (name !== '' && rows !== '' && seats === '') {
      data = {
        name: name,
        rows: rows,
        seats: formData.seats,
      };
    }
    if (name !== '' && rows !== '' && seats !== '') {
      data = {
        name: name,
        rows: rows,
        seats: seats,
      };
    }
    try {
      const respuesta = await ky.put(
        `http://192.168.0.92:3000/cinemas/${params.cinemaID}/auditoriums/${params.id}`,
        {
          json: data,
        },
      );
      traerDatos();
    } catch (error) {
      console.log(error);
    }
  };

  if (bandera == false) {
    traerDatos();
    setBandera(true);
  }

  return (
    <KeyboardAwareScrollView>
      <VStack
        space={4}
        alignItems="center"
        justifyContent="space-around"
        height="100%">
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
            {I18n.t('name')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.name}
              backgroundColor={'#21242D'}
              onChangeText={value => setName(value)}
            />
            {'\n'}
            {I18n.t('rows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.rows.toString()}
              backgroundColor={'#21242D'}
              onChangeText={value => setRows(value)}
            />
            {'\n'}
            {I18n.t('seatsRows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.seats.toString()}
              backgroundColor={'#21242D'}
              onChangeText={value => setSeats(value)}
            />
          </FormControl>
        </Center>
        <View style={styles.switchcontainer}>
          <View
            style={{
              backgroundColor: '#21242D',
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 8,
              flexDirection: 'row',
            }}>
            <Text>Available</Text>
            <Switch
              trackColor={{false: 'grey', true: '#f5dd4b'}}
              thumbColor={isEnabled ? 'white' : 'white'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <ButtonDanger
            onPress={() =>
              navigation.navigate('ConfirmDeleteAuditorium', {
                id: params.id,
                cinemaid: params.cinemaID,
              })
            }
            title={I18n.t('delete')}
            width="150px"
          />
        </View>
        <ButtonPrimary
          onPress={updatearDatos}
          title={I18n.t('save')}
          width="90%"
        />
      </VStack>
    </KeyboardAwareScrollView>
  );
};

export default UpdateAuditoriumUI;
