import { Box, Center, Image, ScrollView, Text, VStack } from 'native-base';
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

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase>;

type Props = {
  navigation: ScreenNavigationProp;
};

export default function MovieDetailsUI({route, navigation}) {

  const movieId = route.params.movieId;
  const movieName = route.params.movieName;
  const movieImage = route.params.movieImage;
  const movieRating = route.params.movieRating;

  const user = useContext(UserContext);
  
  return (
    <VStack space={4} alignItems="center" height="100%">
      <Center w="100%" borderRadius="12">
        <Image
          alt="ScreenSpace"
          borderRadius="12"
          source={{
            uri: movieImage,
          }}
          width={350}
          height={110}
        />
      </Center>
      <Center>
          <Box marginTop="2">
                <StarRating rating={movieRating} style={{}} onChange={() => {}} starSize={25} />
          </Box>
          <Box marginTop="2" marginLeft="3">
                <Text>
                    La película más épica que vas a ver en tu re putísima vida. No te la pierdas gilazo!
                </Text>
          </Box>
      </Center>
      <Center>
        <ScrollView maxH="350">
          <VStack space={2}>
            <Center>
                <Comment rate={5}/>
            </Center>
            <Center>
                <Comment rate={5}/>
            </Center>
            <Center>
                <Comment rate={5}/>
            </Center>
          </VStack>
        </ScrollView>
      </Center>
      <Center w="100%">
        <ButtonPrimary
          title="Showtimes"
          onPress={() => navigation.navigate('Showtimes', {movieId: movieId, movieName: movieName})}
        />
      </Center>
    </VStack>
  );
}