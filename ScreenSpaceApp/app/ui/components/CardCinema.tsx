import React from 'react';
import {HStack, VStack, Pressable} from 'native-base';
import {Box, Image} from 'native-base';
import {Text} from 'react-native';
import {styles} from '../styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'native-base';

const CardCinema = (props: {
  cinemaName: string | undefined;
  cinemaAuditoriumsAmount: string | undefined;
  onPressEdit: any;
  onPressCard: any;
}) => {
  const {cinemaName = 'undefined', cinemaAuditoriumsAmount = 'undefined'} =
    props;
  return (
    <Pressable onPress={props.onPressCard} style={styles.cardAuditorium}>
      <HStack m={4} space={10} style={{display: 'flex'}}>
        <VStack p={4} space={20} style={{flex: 2}}>
          <Box display="flex" flexDirection="row">
            <Image
              style={styles.iconExtraSmallImage}
              source={require('../../assets/images/popcorn.png')}
              alt="popcorn.png"
            />
            <Box style={styles.auditoriumNameContainer}>
              <Text style={styles.bodyText}>{cinemaName}</Text>
            </Box>
          </Box>
          <Box paddingLeft={0}>
            <Text style={styles.labelText}>{cinemaAuditoriumsAmount}</Text>
          </Box>
        </VStack>
        <VStack style={{flex: 0.5}}>
          <Button onPress={props.onPressEdit} variant="outline" colorScheme="white">
            <Icon name="pencil-outline" size={25} color="white" />
          </Button>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default CardCinema;
