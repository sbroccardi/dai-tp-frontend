import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Heading,
  Image,
  Pressable,
  Stack,
  Text,
} from 'native-base';
import React from 'react';
import {useState} from 'react';
import {styles} from '../styles/theme';
import StarRating from 'react-native-star-rating-widget';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const CardMovie = (props: {movieID: string}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const movieID = props;
  const {movie, age, rating} = 0;
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ScreeningList', {
          movieID: movieID,
        })
      }>
      <Box alignItems="center" marginBottom={0}>
        <Box
          maxW="365"
          maxH="119"
          box-sizing="border-box"
          rounded="lg"
          overflow="hidden"
          _dark={{
            borderColor: '#21242D',
            backgroundColor: '#21242D',
          }}
          _web={{
            shadow: 0,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: '#21242D',
          }}>
          <Box display="flex" flexDirection="row">
            <AspectRatio w="60%" ratio={16 / 10} rounded="lg">
              <Stack p="4" space={3}>
                <Stack space={2} marginBottom="1">
                  <Heading size="md" color="#FFFFFF" marginBottom="2" ml="-1">
                    <Text style={styles.bodyText}>{movie}</Text>
                  </Heading>
                  <Box
                    borderColor="#FFFFFF"
                    borderWidth="1"
                    paddingTop="1"
                    paddingBottom="0.5"
                    paddingRight="0.5"
                    maxW="10"
                    display="flex"
                    alignItems="center">
                    <Text
                      fontSize="xs"
                      _light={{
                        color: '#FFFFFF',
                      }}
                      _dark={{
                        color: '#FFFFFF',
                      }}
                      fontWeight="50"
                      ml="-0.5"
                      mt="-1">
                      {age}
                    </Text>
                  </Box>
                </Stack>
                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between">
                  <HStack alignItems="center">
                    <StarRating
                      rating={rating}
                      style={{}}
                      starSize={20}
                      onChange={() => {}}
                    />
                  </HStack>
                </HStack>
              </Stack>
            </AspectRatio>
            <AspectRatio w="40%" ratio={16 / 16} rounded="lg">
              <Image
                source={{
                  uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Box>
      </Box>
    </Pressable>
  );
};

export default CardMovie;
