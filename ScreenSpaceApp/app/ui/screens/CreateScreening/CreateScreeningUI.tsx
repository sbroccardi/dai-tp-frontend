import { Center, VStack, useToast } from 'native-base';
import React, { useContext } from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { palette } from '../../styles/theme';
import I18n from '../../../assets/localization/I18n';
import ky from 'ky';
import { UserContext } from '../../../UserContext';


type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CreateScreeningUI: React.FC<Props> = ({ navigation }) => {
  /*TEMP*/
  const cinemaOptions = ['Hoyts Belgrano', 'Abasto', 'Cinemark Palermo' ];
  const movieOptions = ['Oppenheimer', 'The Whale', 'Harry El sucio Potter', 'Interstellar'];
  const auditoriumOptions = ['Sala 1', 'Sala2', 'Sala 3', 'Sala Monster'];
  const [errors, setErrors] = React.useState({});
  const toast = useToast();
  const [cinemasFlag, setCinemasFlag] = React.useState(0);
  const [auditoriumsFlag, setAuditoriumsFlag] = React.useState(0);
  const [cinemaId, setCinemaId] = React.useState('');


  const user = useContext(UserContext);
  const userId = user.user.id;

  /*TEMP*/
  const [selectedDay, setSelectedDay] = React.useState('');
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const [selectedAuditorium, setSelectedAuditorium] = React.useState('');
  const [selectedMovie, setSelectedMovie] = React.useState('');

  /*const getCinemas = async () => {
    setCinemasFlag(1); //este flag evita que la llamada se haga en loop
    try {
      const userId = user.user.id;
      const response = await ky.get(
        'https://screenspace.azurewebsites.net/cinemas',
      );
      const responseBody = await response.json();
      const cinemasData = responseBody.filter((document: { userId: any; }) => document.userId == userId).map((document: {cinemaId: any; name: any;}) => ({
        name: document.name,
        cinemaId: document.cinemaId
      }));
      setCinemaOptions(cinemasData);
    }
    catch (err) {
      console.error('error: ', err);
    }
  }; cinemasFlag == 0 ? getCinemas(): undefined;

  const getCinemaId = async (cinemaName: string) => {
    setCinemasFlag(1); //este flag evita que la llamada se haga en loop
    try {
      const userId = user.user.id;
      const response = await ky.get(
        'https://screenspace.azurewebsites.net/cinemas',
      );
      const responseBody = await response.json();
      const cinemasData = responseBody.filter((document: { cinemaName: any; }) => document.cinemaName == cinemaName).map((document: {cinemaId: any;}) => ({
        cinemaId: document.cinemaId
      }));
      setCinemaId(cinemasData);
    }
    catch (err) {
      console.error('error: ', err);
    }
  }  


  const getAuditoriums = async (cinemaId: any) => {
    setAuditoriumsFlag(1);
    try {
      //const cinemaId = user.user.id;
      const response = await ky.get(
        `https://screenspace.azurewebsites.net/cinemas/${cinemaId}/auditoriums`,
      );
      const responseBody = await response.json();
      const auditoriumsData = responseBody.filter((document: { cineId: any; }) => document.cineId == cinemaId).map((document: { name: any; }) => ({
        name: document.name
      }));
      setAuditoriumOptions(auditoriumsData);

    }
    catch (err) {
      console.error('error: ', err);
    }
  };  */

  const handleMovieChange = (value: any) => {
    setSelectedMovie(value);
  };

  const handleCinemaChange = (value: any) => {
    console.log(value);
    setSelectedCinema(value);
    setSelectedAuditorium(''); // Reseteamos el valor del siguiente dropdown
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
    //getAuditoriums(cinemaId);
  };

  const handleAuditoriumChange = (value: any) => {
    setSelectedAuditorium(value);
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
  };

  /*const createScreening = async (cinema: string, auditorium: string, movieId: string, date: string) => { //Tenemos que sacar el id de la movie!
    const datosValidos = validate();
    if (datosValidos) {
      try {
        // Realizar la solicitud POST al backend utilizando ky
        const response = await ky.post(`https://screenspace.azurewebsites.net/movies/${movieId}/screenings`, {
          json: {
           
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
  }; */


  const validate = () => {
    setErrors({});
    // Name
    if (!selectedCinema) {
      setErrors(prevErrors => ({
        ...prevErrors,
        cinema: 'Cinema es required',
      }));
      return false;
    }
    // 
    if (!selectedAuditorium) {
      setErrors(prevErrors => ({
        ...prevErrors,
        auditorium: 'Auditorium is required',
      }));
      return false;
    }
    //Movie
    if (!selectedMovie) {
      setErrors(prevErrors => ({
        ...prevErrors,
        movie: 'Movie is required',
      }));
      return false;
    }
    //Date
    if (!selectedDay) {
      setErrors(prevErrors => ({
        ...prevErrors,
        movie: 'Movie is required',
      }));
      return false;
    }
    return true;
  };

  const handleCreateScreening = async () => {
    //createScreening(selectedCinema, selectedAuditorium, selectedMovie);
    validate() ? navigation.replace('ScreeningList', { movieID: 'Opennheimer' }) : 
    toast.show({
      description: Object.values(errors).join('\n'),
      title: 'Error',
      duration: 3000,
      placement: 'top',
    });
  };

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
            backgroundColor: palette.blackLight,
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
      <Center width="100%">
        <ButtonPrimary
          title="Create screening"
          onPress={undefined}
        />
      </Center>
    </VStack>
  );
};

export default CreateScreeningUI;
