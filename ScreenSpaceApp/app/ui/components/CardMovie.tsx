import { AspectRatio, Box, Center, HStack, Heading, Image, Pressable, Stack, Text } from "native-base";
import React from "react";
import { useState } from 'react';


const CardMovie = (props: {movie: string, age: string, rating: number}) => {
  
    return (
      <Pressable>
        <Box alignItems="center" marginBottom={7}>
        <Box maxW="365" maxH="119" box-sizing="border-box" rounded="lg" overflow="hidden" _dark={{
        borderColor: "#21242D",
        backgroundColor: "#21242D"
      }} _web={{
        shadow: 0,
        borderWidth: 0
      }} _light={{
        backgroundColor: "#21242D"
      }}>
          <Box display="flex" flexDirection="row">
            <AspectRatio w="60%" ratio={16 / 10} rounded="lg">
            <Stack p="4" space={3}>
            <Stack space={2} marginBottom="1">
              <Heading size="md" color="#FFFFFF" marginBottom="2" ml="-1">
                <Text fontSize="14">{props.movie}</Text>
              </Heading>
              <Box borderColor="#FFFFFF" borderWidth="1" paddingTop="1" paddingBottom="0.5" paddingRight="0.5" maxW="10" display="flex" alignItems="center">
              <Text fontSize="xs" _light={{
              color: "#FFFFFF"
            }} _dark={{
              color: "violet.400"
            }} fontWeight="50" ml="-0.5" mt="-1">
                {props.age}
              </Text>
              </Box>
            </Stack>
            <HStack alignItems="center" space={4} justifyContent="space-between">
              <HStack alignItems="center">
                <Text color="#FFFFFF" _dark={{
                color: "warmGray.200"
              }} fontWeight="400">
                  {props.rating}
                </Text>
              </HStack>
            </HStack>
          </Stack>
            </AspectRatio>
            <AspectRatio w="40%" ratio={16 / 16} rounded="lg">
              <Image source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
            </AspectRatio>
          </Box>
        </Box>
      </Box>
      </Pressable>
    );
  };
  

  
  export default CardMovie;