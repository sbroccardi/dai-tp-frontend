import {Center, VStack, Text, ScrollView} from 'native-base';
import React from 'react';
import CardAuditorium from '../../Components/CardAuditorium';
import ToolbarPrivateUser from '../../Components/ToolbarPrivateUser';
import SearchBar from '../../Components/SearchBar';
import ButtonPrimary from '../../Components/ButtonPrimary';

export default function AuditoriumListUI(params: {cinema: string}) {
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
