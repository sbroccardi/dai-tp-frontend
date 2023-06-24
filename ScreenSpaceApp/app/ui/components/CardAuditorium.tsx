import React from 'react';
import {Box, Button, HStack, Image, Pressable, VStack} from 'native-base';
import {Text} from 'react-native';
import {palette, styles} from '../styles/theme';

const CardAuditorium = (props: {
  auditoriumName?: string | undefined;
  auditoriumSize?: string | undefined;
  auditoriumAvailability?: string | undefined;
}) => {
  const {
    auditoriumName = 'undefined',
    auditoriumSize = 'undefined',
    auditoriumAvailability = 'undefined',
  } = props;
  return (
    <Pressable
      onPress={() => {
        /*TEMP*/ console.log('BP!');
      }}
      style={styles.cardAuditorium}>
      <HStack m={4} space={19} style={{display: 'flex'}}>
        <VStack p={4} space={30} style={{flex: 1}}>
          <Box display="flex" flexDirection="row" flex={0}>
            <Image
              style={styles.iconExtraSmallImage}
              source={require('../../assets/images/popcorn.png')}
              alt="popcorn.png"
            />
            <Box style={styles.auditoriumNameContainer}>
              <Text style={styles.bodyText}>{auditoriumName}</Text>
            </Box>
          </Box>
          <Box style={styles.auditoriumSizeContainer} flex={0}>
            <Text style={styles.bodyText}>{auditoriumSize}</Text>
          </Box>
        </VStack>
        <VStack pl={30} style={{flex: 1}}>
          <Button disabled variant="outline" color={palette.white}>
            {auditoriumAvailability}
          </Button>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default CardAuditorium;
