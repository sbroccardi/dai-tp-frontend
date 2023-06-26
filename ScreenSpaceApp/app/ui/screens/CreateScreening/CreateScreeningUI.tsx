import { Center, VStack } from 'native-base';
import React from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { palette } from '../../styles/theme';
import I18n from '../../../assets/localization/I18n';


type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CreateScreeningUI: React.FC<Props> = ({ navigation }) => {
  /*TEMP*/

  const [cinemaOptions, setCinemaOptions] = React.useState();
  
  /*TEMP*/
  const [selectedDay, setSelectedDay] = React.useState('');
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const [selectedAuditorium, setSelectedAuditorium] = React.useState('');
  const [selectedMovie, setSelectedMovie] = React.useState('');

  const handleCinemaChange = (value: any) => {
    console.log(value);
    setSelectedCinema(value);
    setSelectedAuditorium(''); // Reseteamos el valor del siguiente dropdown
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
  };

  const handleAuditoriumChange = (value: any) => {
    setSelectedAuditorium(value);
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
  };

  const handleMovieChange = (value: any) => {
    setSelectedMovie(value);
  }

  const createScreening = async () => {
    const datosValidos = validate();
    if (datosValidos) {
      try {
        // Realizar la solicitud POST al backend utilizando ky
        const response = await ky.post(`https://screenspace.azurewebsites.net/cinemas`, {
          json: {
            userId: userId,
            name: nombreCine,
            location: direccionCine
          },
        });
        const responseBody = await response.json();

        console.log('Cine creado:', responseBody);
        navigation.replace('CinemasList');
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
  }

  const validate = () => {
    setErrors({});
    // Name
    if (formData.name.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Name es required',
      }));
      return false;
    }
    // Location
    if (formData.location.length === 0) {
      setErrors(prevErrors => ({
        ...prevErrors,
        rows: 'Location is required',
      }));
      return false;
    }

    return true;
  };

  const handleCreateScreening = async () => {
    createScreening(formData.name, formData.location);
    navigation.replace('ScreeningList', { movieID: '1' })
  }

  return (
    <VStack space={3} alignItems="center">
      <Center>
        <DropdownMenu
          purpose={'cinema'}
          disabled={false}
          options={cinemaOptions}
          onChange={handleCinemaChange}
          valueSelected={selectedCinema}
        />
      </Center>
      <Center>
        <DropdownMenu
          purpose={'auditorium'}
          disabled={!selectedCinema}
          options={auditoriumOptions}
          onChange={handleAuditoriumChange}
          valueSelected={selectedAuditorium}
        />
      </Center>
      <Center>
        <DropdownMenu
          purpose={'movie'}
          disabled={!selectedAuditorium}
          options={movieOptions}
          onChange={handleMovieChange}
        />
      </Center>
      <Center p='2'>
        <Calendar
          style={{
            borderWidth: 1,
            borderRadius: 12,
            borderColor: palette.blackLight,
            width: 362
          }}
          theme={{
            textSectionTitleColor: palette.green
          }}
          onDayPress={day => {
            setSelectedDay(day.dateString);
          }}
          markedDates={{
            [selectedDay]: { selected: true, disableTouchEvent: true }
          }}
        />
      </Center>
      <Center>
        <ButtonPrimary title={I18n.t('createScreening')} onPress={handleCreateScreening} />
      </Center>
    </VStack>
  );
};

export default CreateScreeningUI;
