import {Center, Image, VStack} from 'native-base';
import React from 'react';
import HomeToolbarPrivateUser from '../../Components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../Components/ButtonPrimary';
import CardScreeningPrivate from '../../Components/CardScreeningPrivate';
import DropdownMenu from '../../Components/DropdownMenu';

export default function ListScreeningUIPrivate({route}) {
  const {movieID} = route.params;
  //{JSON.stringify(movieID)}
  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center>
        <HomeToolbarPrivateUser title={movieID} />
      </Center>
      <Center w="100%" borderRadius="12">
        <Image
          alt="ScreenSpace"
          borderRadius="12"
          source={{
            uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
          }}
          width={350}
          height={110}
        />
      </Center>
      <Center>
        <DropdownMenu
          purpose={'Cinema'}
          disabled={undefined}
          options={[]}
          onChange={undefined}
        />
      </Center>
      <Center>
        <CardScreeningPrivate
          cinema="jajaja"
          auditorium="jajajaj"
          date="jajajaj"
        />
      </Center>
      <Center>
        <CardScreeningPrivate
          cinema="jajaja"
          auditorium="jajajaj"
          date="jajajaj"
        />
      </Center>
      <Center w="100%">
        <ButtonPrimary title="Create screening" onPress={undefined} />
      </Center>
    </VStack>
  );
}
