import {Center, FormControl, Image, Input, VStack, useToast} from 'native-base';
import React from 'react';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import I18n from '../../../assets/localization/I18n';
import ButtonPrimary from '../../components/ButtonPrimary';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Config from 'react-native-config';
import ky from 'ky';
import {UserContext} from '../../../UserContext';
import { useContext } from 'react';

export default function CreateAuditoriumUI({ route }) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const toast = useToast();
  const [formData, setData] = React.useState({
    cinemaId: '',
    nameAuditorium: '',
    rows: '',
    seats: '',
  });

  const cineId = route.params
  const cinemaName = route.params

  const [errors, setErrors] = React.useState({});

  const validate = () => {
    setErrors({});

    // Name
    if (formData.nameAuditorium.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Name es required',
      }));
      return false;
    }

    // Rows
    if (!formData.rows) {
      setErrors(prevErrors => ({
        ...prevErrors,
        rows: 'Number of rows is required',
      }));
      return false;
    }

     // Seats
     if (!formData.seats) {
      setErrors(prevErrors => ({
        ...prevErrors,
        rows: 'Number of seats is required',
      }));
      return false;
    }

    return true;
  };

  const crearAuditorio = async (nombreAuditorio: string, rows: string, seats: string) => {
    // Realizar validación de los datos ingresados
    const datosValidos = validate();
    if (datosValidos) {
      try {
        // Realizar la solicitud POST al backend utilizando ky
        const response = await ky.post(`https://screenspace.azurewebsites.net/cinemas/${cineId}/auditoriums`, {
          json: {
            'cinemaId': `${cineId}`,
            'name': `${nombreAuditorio}`,
            'rows': `${rows}`,
            'seatsPerRow': `${seats}` 
          },
        }); 
        const responseBody = await response.json();
  
        console.log('Cine creado:', responseBody);
        // Realizar cualquier acción adicional después de crear el cine, como redireccionar a otra pantalla
      } catch (error) {
        console.error('Error al crear el cine:', error);
      }
    } else {
        console.log(errors);
  
        toast.show({
          description: Object.values(errors).join('\n'),
          title: 'Error',
          duration: 3000,
          placement: 'top',
        });
    };
  };

  const handleCrearAuditorio = () => {
    crearAuditorio(formData.nameAuditorium, formData.rows, formData.seats);
    navigation.replace('AuditoriumList', {params: {cinemaName: cinemaName, cinemaId: cineId}});
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
            <FormControl.Label _text={{bold: true}}>
              {I18n.t('nameAuditorium')}
            </FormControl.Label>
            <Input
              size="md"
              keyboardType="default"
              inputMode="text"
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
              value = {formData.rows}
              keyboardType="numeric"
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
              value = {formData.seats}
              keyboardType="numeric"
              onChangeText={value => setData({...formData, seats: value})}
            />
            <FormControl.ErrorMessage _text={{fontSize: 'xs'}}>
              Error Seats
            </FormControl.ErrorMessage>
          </FormControl>
        </Center>
        <Center w={'100%'}>
          <ButtonPrimary onPress={handleCrearAuditorio} title={I18n.t('save')} />
        </Center>
      </VStack>
    </KeyboardAwareScrollView>
  );
}
