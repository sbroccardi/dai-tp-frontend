import {Center, VStack} from 'native-base';
import React from 'react';
import CardMovie from '../../components/CardMovie';
import SearchBar from '../../components/SearchBar';
import ToolbarPrivateUser from '../../components/ToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function PrivateMoviesScreenUI() {
  return (
    <VStack space={3} alignItems="center" height="100%">
      <Center pt={5} pb={5}>
        <ToolbarPrivateUser title="Screenings" onPress={undefined} />
      </Center>
      <Center>
        <SearchBar />
      </Center>
      <Center>
        <CardMovie movie={''} age={''} rating={0} />
      </Center>
      <Center>
        <CardMovie movie={''} age={''} rating={0} />
      </Center>
      <Center>
        <CardMovie movie={''} age={''} rating={0} />
      </Center>
      <Center width="100%">
        <ButtonPrimary title="Create screening" onPress={undefined} />
      </Center>
    </VStack>
  );
}
