import { Box, Center, FormControl, Image, Input, ScrollView, Text, VStack, WarningOutlineIcon } from 'native-base';
import React, { useContext, useEffect } from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import ky from 'ky';
import { UserContext } from '../../../UserContext';
import { typesAreEqual } from 'react-native-document-picker/lib/typescript/fileTypes';
import Config from 'react-native-config';
import Comment from '../../components/Comment';
import StarRating from 'react-native-star-rating-widget';
import CardPurchase from '../../components/CardPurchase';
import InfoPurchase from '../../components/InfoPurchase';
import { styles } from '../../styles/theme';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function PurchaseDetailsUI() {
  
    const [starRating, setStarRating] = React.useState(0);

  /*const handleCinemaChange = (value: any) => {
    console.log('Cinema id en listScreening: ' + value);
    setSelectedCinema(value);
    //traer funciones del cine
    try {

    }
    catch (err) {
      console.error('Error retrieving cinema screens' + err);
    }
  };
  //{JSON.stringify(movieID)}
  useEffect(() => {
    const fetchCinemaOptions = async () => {
      try {
        const authToken = user.user?.tokens.accessToken;
        const userId = user.user?.id;
        const response = await ky.get('https://screenspace.azurewebsites.net/cinemas',
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        const responseObject = await response.json();
        const names = responseObject
          .filter((document: { userId: any }) => document.userId == userId)
          .map((cinema: any) => cinema.name);
        setCinemaOptions(names);
        //
        const ids = responseObject
          .filter((document: { userId: any }) => document.userId == userId)
          .map((cinema: { _id: any; }) => cinema._id)
        setCinemaIds(ids)
        //
      } catch (error) {
        console.error('Error retrieving cinema options:', error);
      }
    };
    fetchCinemaOptions();

    const fetchScreenings = async () => {
      try {
        const authToken = user.user?.tokens.accessToken;
        const response = await ky.get(`${Config.API_BASE_URL}/cinemas/${movieID}/screenings`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        const responseObject = await response.json();
        console.log('screenings de la pelicula: ' + responseObject);
      }
      catch (err) {
        console.error('Error retrieving screenings' + err)
      }
    };
    fetchScreenings();
  }, []); */

  return (
    <KeyboardAwareScrollView>
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
          <InfoPurchase movie={''} date={''} cinema={''} auditorium={''} location={''} tickets={undefined} seats={undefined} price={undefined}/>
      </Center>
      <Center>
      <FormControl width="95%">
        <FormControl.Label>Leave a comment</FormControl.Label>
            <Input width="95%" height="100"/>
      </FormControl>
      </Center>
      <Center>
        <StarRating rating={starRating} style={{}} onChange={(value) => {setStarRating(value)}} starSize={40} />
      </Center>
      <Center w="100%">
        <ButtonPrimary
          title="Save"
          onPress={() => navigation.navigate('CreateScreeningStack')}
        />
      </Center>
    </VStack>
    </KeyboardAwareScrollView>
  );
}