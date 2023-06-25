import {Center, VStack, Text, ScrollView} from 'native-base';
import React, { useEffect, useState } from 'react';
import CardAuditorium from '../../components/CardAuditorium';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import SearchBar from '../../components/SearchBar';
import ButtonPrimary from '../../components/ButtonPrimary';
import ky from 'ky';

export default function AuditoriumListUI(params: {cinema: string}) {
  
  const [auditorios, setAuditorios] = useState([]);

  useEffect(() => {
    obtenerAuditorios(); // Llamamos a la función para obtener los auditorios al cargar la pantalla
  }, []);

  const obtenerAuditorios = async () => {
    try {
      const cineId = 'ID_DEL_CINE'; // Reemplaza esto con el ID del cine específico
      const url = `URL_DEL_ENDPOINT_DE_AUDITORIOS/${cineId}`; // Reemplaza esto con la URL correcta de tu backend

      const response = await ky.get(url).json();

      setAuditorios(response); // Actualizamos el estado con la lista de auditorios obtenida desde el servidor
    } catch (error) {
      console.error('Error al obtener los auditorios:', error);
    }
  };
  
  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center>
        <Text>jajaajaj</Text>
      </Center>
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <ScrollView maxH="300">
          <VStack space={4} alignItems="center" height="100%">
            <Center>
              <CardAuditorium
                auditoriumName="Sala 7"
                auditoriumAvailability="Disponible"
                auditoriumSize="12 rows of 7 seats"
              />
            </Center>
            <Center>
              <CardAuditorium
                auditoriumName="Sala 8"
                auditoriumAvailability="Disponible"
                auditoriumSize="12 rows of 7 seats"
              />
            </Center>
            <Center>
              <CardAuditorium
                auditoriumName="Sala 8"
                auditoriumAvailability="Disponible"
                auditoriumSize="12 rows of 7 seats"
              />
            </Center>
            <Center>
              <CardAuditorium
                auditoriumName="Sala 8"
                auditoriumAvailability="Disponible"
                auditoriumSize="12 rows of 7 seats"
              />
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center width="100%">
        <ButtonPrimary title="Create screening" onPress={undefined} />
      </Center>
    </VStack>
  );
}
