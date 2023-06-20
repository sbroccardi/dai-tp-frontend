import {Center, VStack} from 'native-base';
import React from 'react';
import DropdownMenu from '../../components/DropdownMenu';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';
import ButtonPrimary from '../../components/ButtonPrimary';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

const CreateScreeningUI: React.FC<Props> = ({navigation}) => {
  /*TEMP*/
  const cinemaOptions = ['Cinema Devoto', 'Cinema Abasto', 'Cinema Caballito'];
  const auditoriumOptions = ['Auditorio 1', 'Auditorio 2', 'Auditorio 3'];
  const movieOptions = ['Oppenheimer', 'Interstellar', 'Harry Potter'];
  /*TEMP*/
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
          onChange={undefined}
        />
      </Center>
      <Center>
        <ButtonPrimary
          title="Save"
          onPress={() => navigation.replace('ScreeningList', {movieID: '1'})}
        />
      </Center>
    </VStack>
  );
};

export default CreateScreeningUI;
