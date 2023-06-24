import {VStack} from 'native-base';
import React, {useState} from 'react';
import {View} from 'react-native';
import FilterDropdown from '../../components/FilterDropDown';

const FiltersScreenUI = ({}) => {
  const [service1, setService1] = useState('');
  const [service2, setService2] = useState('');
  const [service3, setService3] = useState('');
  const [service4, setService4] = useState('');
  const [service5, setService5] = useState('');

  const handleService1Change = (value: string) => {
    setService1(value);
    // Lógica adicional si es necesario
  };

  const handleService2Change = (value: string) => {
    setService2(value);
    // Lógica adicional si es necesario
  };
  return (
    <VStack
      space={4}
      alignItems="center"
      justifyContent="space-around"
      height="100%">
      <View>
        <FilterDropdown
          label="Genre"
          value={JSON.stringify({id: 1, name: 'ds 1'})}
          onValueChange={handleService1Change}
        />
        <FilterDropdown
          label="Allowed Age"
          value={JSON.stringify({id: 1, name: 'Option 1'})}
          onValueChange={handleService2Change}
        />
        <FilterDropdown
          label="Raiting"
          value={JSON.stringify({id: 1, name: 'Option 1'})}
          onValueChange={handleService2Change}
        />
        <FilterDropdown
          label="Distance"
          value={JSON.stringify({id: 1, name: 'Option 1'})}
          onValueChange={handleService2Change}
        />
        <FilterDropdown
          label="Cinema"
          value={JSON.stringify({id: 1, name: 'Option 1'})}
          onValueChange={handleService2Change}
        />
        {/* Agrega los otros dropdowns con sus propias etiquetas y funciones de control */}
      </View>
    </VStack>
  );
};

export default FiltersScreenUI;
