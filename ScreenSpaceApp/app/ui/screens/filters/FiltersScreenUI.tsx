import {Center, VStack} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import ButtonDanger from '../../components/ButtonDanger';
import ButtonPrimary from '../../components/ButtonPrimary';
import DropdownMenu from '../../components/DropdownMenu';
import { styles } from '../../styles/theme';
import I18n from '../../../assets/localization/I18n';


const FiltersScreenUI = ({}) => {
  const genreOptions = ['Terror', 'Comedia', 'Suspenso'];
  const ageAllowed = ['ATP','+13','+16','+18'];
  const rating = [' 1', '2', '3', '4','5','6','7','8','9','10'];
  const distance = ['1KM', '3KM', '5KM', '10KM'];
  const cinema = ['Hoyts Belgrano', 'Abasto', 'Cinemark Palermo'];
  const filtros = ['Genero','Edad','Calificacion','Distancia','Cinema'];
  const [SelectedFilter, setSelectedFilter] = React.useState(' ');
  const [SelectedMenu, setSelectedMenu] = React.useState(0);
  const [Values, setValues] = React.useState([' ']);
  const [Opcion, setOpcion] = React.useState('');

  const handleFilterChange = (value: string) => {
    setSelectedFilter(value);
  
    if (value === 'Edad') {
      setValues(ageAllowed);
      setSelectedMenu(1);

    } else if (value === 'Genero') {
      setValues(genreOptions);
      setSelectedMenu(1);

    } else if (value === 'Calificacion') {
      setValues(rating);
      setSelectedMenu(1);

    } else if (value === 'Distancia') {
      setValues(distance);
      setSelectedMenu(1);
      
    } else if (value === 'Cinema') {
      setValues(cinema);
      setSelectedMenu(1);;
    }
  };
  const handleOptions = (value: any) => {
    setOpcion(value)
  };
  
  return (
    <VStack
      space={4}
      alignItems="center"
      justifyContent="space-around"
      height="70%">
     <Center>
        <DropdownMenu
          purpose={'filter'}
          disabled={false}
          options={filtros}
          onChange={handleFilterChange}
          valueSelected={SelectedFilter}
        />
      </Center>
      <Center>
      {SelectedMenu == 1 && (
        <DropdownMenu
          purpose={SelectedFilter}
          disabled={false}
          options={Values}
          onChange={handleOptions}
          valueSelected={Opcion}
        />
        )}
        </Center>
        
        <ButtonPrimary
          onPress={() =>  console.log("guardar")}
          title={I18n.t('save')}
          width= "35%"
          />
        <ButtonDanger onPress={ () => console.log(" no guardar")} title={'Go Back'} width= "35%" />
          

    </VStack>
  );
};

export default FiltersScreenUI;
