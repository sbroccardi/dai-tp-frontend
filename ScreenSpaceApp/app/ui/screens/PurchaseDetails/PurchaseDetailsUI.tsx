import { Box, Center, FormControl, Image, Input, ScrollView, Text, VStack, WarningOutlineIcon } from 'native-base';
import React, { useContext, useEffect } from 'react';
import HomeToolbarPrivateUser from '../../components/HomeToolbarPrivateUser';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardScreeningPrivate from '../../components/CardScreeningPrivate';
import DropdownMenu from '../../components/DropdownMenu';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useRoute } from '@react-navigation/native';
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
    const route = useRoute();
    const parametros = route.params;
    const [comment, setComment] = React.useState('');
    const [starRating, setStarRating] = React.useState(0);
    console.log(parametros)

    const handleChange = (text) => {
      setComment(text);
    };
  
    

  return (
    <KeyboardAwareScrollView>
    <VStack space={4} alignItems="center" height="100%">
      <Center w="100%" borderRadius="12">
        <Image
          alt="ScreenSpace"
          borderRadius="12"
          source={{
            uri: parametros.imageUrl,
          }}
          width={350}
          height={110}
        />
      </Center>
      <Center>
          <InfoPurchase movie={parametros.movieTitle} date={parametros.datetime} cinema={parametros.cinema} auditorium={'Auditorio 3D'} location={'Lomas'} tickets={2} seats={parametros.asientos} price={parametros.moviePrice}/>
      </Center>
      <Center>
      <FormControl width="95%">
        <FormControl.Label>Leave a comment</FormControl.Label>
            <Input width="95%" height={50} value={comment} onChangeText={handleChange} />
      </FormControl>
      </Center>
      <Center>
        <StarRating rating={starRating} style={{}} onChange={(value) => {setStarRating(value)}} starSize={40} />
      </Center>
      <Center w="100%">
        <ButtonPrimary
          title="Save"
          onPress={() => {console.log(comment + " " + starRating)}}
        />
      </Center>
    </VStack>
    </KeyboardAwareScrollView>
  );
}