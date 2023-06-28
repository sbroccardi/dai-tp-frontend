import {Center, Image, ScrollView, VStack} from 'native-base';
import React from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function ListScreeningUIPrivate({route, navigation}) {
  const {movieID} = route.params;
  const cinemaOptions = ['Hoyts Belgrano', 'Abasto', 'Cinemark Palermo'];
  const [selectedCinema, setSelectedCinema] = React.useState('');
  const handleCinemaChange = (value: any) => {
    console.log(value);
    setSelectedCinema(value);
  };
  //{JSON.stringify(movieID)}
  return (
    <VStack space={4} alignItems="center" height="100%">
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
          options={cinemaOptions}
          onChange={handleCinemaChange}
        />
      </Center>
      <Center>
        <ScrollView maxH="350">
          <VStack>
            <Center>
              <CardScreeningPrivate
                cinema="Hoyts Belgrano"
                auditorium="Sala 7"
                date="Saturday, 21.07.23 - 16:00"
              />
            </Center>
            <Center>
              <CardScreeningPrivate
                cinema="Cinemark Palermo"
                auditorium="Sala 3"
                date="Sunday, 17.08.23 - 19:30"
              />
            </Center>
            <Center>
              <CardScreeningPrivate
                cinema="Abasto"
                auditorium="Sala 12"
                date="Tuesday, 12.06.23 - 16:00"
              />
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center w="100%">
        <ButtonPrimary
          title="Create screening"
          onPress={() => navigation.navigate('CreateScreeningStack')}
        />
      </Center>
    </VStack>
  );
}
