import React from "react";
import { HStack, Surface, VStack, Pressable } from "@react-native-material/core";
import { Box, Image} from "native-base";
import { Text } from 'react-native';
import { palette, styles } from "../styles/theme";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'native-base';


const CardCinema=(props:{cinemaName?:string|undefined, cinemaAuditoriumsAmount?:string|undefined})=>{
    const {cinemaName='undefined', cinemaAuditoriumsAmount='undefined'} = props;
    return(
        <Surface style={{
            backgroundColor:palette.blackLight,
            borderRadius:12,
            padding:4
            }}>
        <Pressable onPress={()=>{/*TEMP*/console.log('BP!')}} pressEffect="highlight" style={styles.cardAuditorium} pressEffectColor={palette.white}>
            <HStack  m={4} spacing={19}>
                <VStack p={4} spacing={30}>
                    <Box display="flex" flexDirection="row">
                        <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/popcorn.png')} alt="popcorn.png"/>
                        <Box style={styles.auditoriumNameContainer}><Text style={styles.bodyText}>{cinemaName}</Text></Box>
                    </Box>
                    <Box style={styles.auditoriumSizeContainer}>
                        <Text style={styles.labelText}>{cinemaAuditoriumsAmount}</Text>
                    </Box>
                </VStack>
                <VStack pl={55}>
                    <Button onPress={undefined} variant='outline' colorScheme="white" >
                        <Icon name='pencil-outline' size={25} color="white"/>
                    </Button>
                </VStack>
            </HStack>
        </Pressable>
        </Surface>
    )
}

export default CardCinema;