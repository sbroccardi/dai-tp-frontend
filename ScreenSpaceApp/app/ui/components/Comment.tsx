import React, {useState} from "react";
import { HStack, Surface, VStack, Pressable } from "@react-native-material/core";
import { Box, Image, Row, Spacer} from "native-base";
import { Text, View } from 'react-native';
import { palette, styles } from "../styles/theme";
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'native-base';

const Comment=(props:{userName?:string|undefined, commentDate?:string|undefined, commentContent?:any|undefined, rate:any})=>{
    const {userName='undefined',commentContent='undefined', commentDate='undefined', rate='0'} = props;

    return(
        <Surface style={{
            backgroundColor:palette.blackLight,
            borderRadius:12,
            padding:4
            }}>
        <Pressable onPress={()=>{/*TEMP*/console.log('BP!')}} pressEffect="highlight" style={styles.commentCard} pressEffectColor={palette.white}>
            <HStack  m={4} spacing={60} style={{display:'flex', flex:1}}>
                <Box display="flex" flexDirection="row" flex={0.8}>
                    <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/defaultAvatar.png')} alt="popcorn.png"/>
                    <Box style={styles.auditoriumNameContainer}><Text style={styles.labelText}>{userName}</Text></Box>
                </Box>
                <Box style={styles.commentDateContainer}>
                    <Text style={styles.labelText}>{commentDate}</Text>
                </Box>
            </HStack>
            <VStack m={4} spacing={60} style={{flex:3, display:'flex'}}>
                <Box style={styles.commentContentContainer}>
                    <Text style={styles.commentText}>
                        {commentContent}
                    </Text>
                </Box>
                <Box style={styles.ratingContainer}>
                    
                </Box>
            </VStack>
        </Pressable>
        </Surface>
    )
}

export default Comment;