import React from "react";
import { Alert } from "react-native";
import { HStack, Surface, VStack, Pressable } from "@react-native-material/core";
import { Box, Image} from "native-base";
import {Button as BotonMaterial} from "@react-native-material/core";
import { Text } from 'react-native';
import { palette, styles } from "../styles/theme";
import { Button } from "native-base";


const CardAuditorium=(props:{auditoriumName?:string|undefined, auditoriumSize?:string|undefined, auditoriumAvailability?:string|undefined})=>{
    const {auditoriumName='undefined', auditoriumSize='undefined', auditoriumAvailability='undefined'} = props;
    return(
        <Surface style={{
            backgroundColor:palette.blackLight,
            borderRadius:12,
            padding:4
            }}>
        <Pressable onPress={()=>{/*TEMP*/console.log('BP!')}} pressEffect="ripple" style={styles.cardAuditorium} pressEffectColor={palette.white}>
            <HStack  m={4} spacing={19} style={{display:'flex'}}>
                <VStack p={4} spacing={30} style={{flex:1}}>
                    <Box display="flex" flexDirection="row" flex={0}>
                        <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/popcorn.png')} alt="popcorn.png"/>
                        <Box style={styles.auditoriumNameContainer}><Text style={styles.bodyText}>{auditoriumName}</Text></Box>
                    </Box>
                    <Box style={styles.auditoriumSizeContainer} flex={0}>
                        <Text style={styles.bodyText}>{auditoriumSize}</Text>
                    </Box>
                </VStack>
                <VStack pl={30} style={{flex:1}}>
                    <BotonMaterial disabled variant="outlined" title={auditoriumAvailability} color={palette.white}/>
                </VStack>
            </HStack>
        </Pressable>
        </Surface>
    )
}

export default CardAuditorium;