import { Center, VStack, useToast } from 'native-base';
import React, { useContext, useEffect } from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { palette } from '../../styles/theme';
import I18n from '../../../assets/localization/I18n';
import ky from 'ky';
import { UserContext } from '../../../UserContext';
import Config from 'react-native-config';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CreateScreeningUI: React.FC<Props> = ({ navigation }) => {
  /*TEMP*/
  const movieOptions = [
    'Oppenheimer',
    'The Whale',
    'Harry El sucio Potter',
    'Interstellar',
  ];
  const [auditoriumOptions, setAuditoriumOptions] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const toast = useToast();
  const user = useContext(UserContext);
  const [selectedDay, setSelectedDay] = React.useState('');
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const [selectedAuditorium, setSelectedAuditorium] = React.useState('');
  const [selectedMovie, setSelectedMovie] = React.useState('');
  const [cinemaOptions, setCinemaOptions] = React.useState([]);
  const [cinemasData, setCinemasData] = React.useState([{
    cinemaName:'',
    cinemaId:''
  }]);

  useEffect(() => {
    const fetchCinemaOptions = async () => {
      try {
        const userId = user.user.id;
        const response = await ky.get(`${Config.API_BASE_URL}/cinemas`);
        const cinemasData = await response.json();
        //getCinemaNames
        const cinemaNames = cinemasData
        .filter((document: { userId: any }) => document.userId == userId)
        .map((cinema: any) => cinema.name);
        setCinemaOptions(cinemaNames);
        //getCinemaIds
        const data = cinemasData
        .filter((document: { userId: any }) => document.userId == userId)
        .map((cinema:{cinemaName: any; cinemaId:any;}) =>({
          cinemaName: cinema.cinemaName,
          cinemaId: cinema.cinemaId,
        } ),
        )
        setCinemasData(data);
      } catch (error) {
        console.error('Error retrieving cinema options:', error);
      }
    };

    fetchCinemaOptions();
  }, []);

  const handleMovieChange = (value: any) => {
    setSelectedMovie(value);
  };

  const handleCinemaChange = async (value: any) => {
    setSelectedCinema(value);
    console.log('valor seleccionado:'+value);
    setSelectedAuditorium(''); // Reseteamos el valor del siguiente dropdown
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
    const cinemaId = cinemasData.find(cinema => cinema.cinemaName === value)?.cinemaId; //esto obtiene el cinemaId a traves del nombre... esta mal pero sirve por ahora
    try {
      const response = await ky.get(
        `${Config.API_BASE_URL}/cinemas/${cinemaId}/auditoriums`
      );
      const auditoriumsData = await response.json();
      const auditoriumNames = auditoriumsData
      .map((auditorium: any) => auditorium.name);
      setAuditoriumOptions(auditoriumNames);
    } catch (error) {
      console.error('Error retrieving auditoriums:', error);
    }
  };

  const handleAuditoriumChange = (value: any) => {
    setSelectedAuditorium(value);
    setSelectedMovie(''); // Reseteamos el valor del siguiente dropdown
  };

 
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
    validate()
      ? navigation.replace('ScreeningList', { movieID: 'Opennheimer' })
      : toast.show({
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
      <Center p="2">
        <Calendar
          style={{
            borderWidth: 1,
            borderRadius: 12,
            backgroundColor: palette.blackLight,
            borderColor: palette.blackLight,
            width: 362,
          }}
          theme={{
            textSectionTitleColor: palette.green,
          }}
          onDayPress={day => {
            setSelectedDay(day.dateString);
          }}
          markedDates={{
            [selectedDay]: { selected: true, disableTouchEvent: true },
          }}
        />
      </Center>
      <Center width="100%">
        <ButtonPrimary title="Create screening" onPress={handleCreateScreening} />
      </Center>
    </VStack>
  );
};

export default CreateScreeningUI;
 /*const createScreening = async (cinema: string, auditorium: string, movieId: string, date: string) => { //Tenemos que sacar el id de la movie!
    const datosValidos = validate();
    if (datosValidos) {
      try {
        // Realizar la solicitud POST al backend utilizando ky
        const response = await ky.post(`${Config.API_BASE_URL}/movies/${movieId}/screenings`, {
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
