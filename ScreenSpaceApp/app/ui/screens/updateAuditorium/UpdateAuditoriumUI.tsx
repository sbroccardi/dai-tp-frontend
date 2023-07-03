import {
  Center,
  FormControl,
  Input,
  Image,
  Text,
  VStack,
  useToast,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Switch} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation, useRoute} from '@react-navigation/native';
import I18n from '../../../assets/localization/I18n';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import {styles} from '../../styles/theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ky from 'ky';
import Config from 'react-native-config';

const UpdateAuditoriumUI = ({}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [formData, setData] = React.useState({name: '', rows: '', seats: '', available: true});
  const route = useRoute();
  const cinemaId = route.params.cinemaId;
  const auditoriumId = route.params.auditoriumId;
  
  useEffect(() => {  
    console.log(cinemaId);
    console.log(auditoriumId);
    const respuesta = ky.get(
      `${Config.API_BASE_URL}/cinemas/${cinemaId}/auditoriums/${auditoriumId}`,
    );
    const responseBody = respuesta.json();
    console.log(responseBody);
    setData({
      ...formData,
      name: responseBody.name,
      rows: responseBody.rows,
      seats: responseBody.seatsPerRow,
      available: responseBody.available,
    });
  }, []);

  const updatearDatos = async () => {
    let data = {
      name: formData.name,
      rows: formData.rows,
      seats: formData.seats,
      available: formData.available,
    }
    try {
      const respuesta = await ky.put(
        `${Config.API_BASE_URL}/cinemas/${cinemaId}/auditoriums/${auditoriumId}`,
        {
          json: data,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

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
              onChangeText={value => setData({...formData, name: value})}
            />
            {'\n'}
            {I18n.t('rows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.rows}
              backgroundColor={'#21242D'}
              onChangeText={value => setData({...formData, rows: value})}
            />
            {'\n'}
            {I18n.t('seatsRows')}
            <Input
              size="md"
              keyboardType="email-address"
              inputMode="email"
              placeholder={formData.seats}
              backgroundColor={'#21242D'}
              onChangeText={value => setData({...formData, seats: value})}
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
              value={formData.available}
            />
          </View>
          <ButtonDanger
            onPress={() =>
              navigation.navigate('ConfirmDeleteAuditorium', {
                id: auditoriumId,
                cinemaid: cinemaId,
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
