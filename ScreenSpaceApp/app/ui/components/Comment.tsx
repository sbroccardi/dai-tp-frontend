import React, {useState} from "react";
import { HStack, Surface, VStack, Pressable, Stack } from "@react-native-material/core";
import { Box, Image, Row, Spacer} from "native-base";
import { Text, View } from 'react-native';
import { palette, styles } from "../styles/theme";
import Icon from 'react-native-vector-icons/AntDesign';
import { Button } from 'native-base';
import StarRating from 'react-native-star-rating-widget';
import { color } from "native-base/lib/typescript/theme/styled-system";


const Comment=(props:{userName?:string|undefined, commentDate?:string|undefined, commentContent?:any|undefined, rate:any})=>{
    const {userName='undefined',commentContent='undefined', commentDate='undefined', rate='0'} = props;

    return(
        <Surface style={{
            backgroundColor:palette.blackLight,
            borderRadius:12,
            padding:4
            }}>
        <View style={{margin:0, borderRadius:10}}>
        <Pressable onPress={()=>{}} pressEffect="none" style={styles.commentCard} pressEffectColor={palette.white} android_ripple={{color:palette.white, borderless:true}}>
            <HStack  m={4} spacing={60} style={{display:'flex', flex:1}}>
                <Box display="flex" flexDirection="row" flex={0.8}>
                    <Image style={styles.iconExtraSmallImage} source={require('../../assets/images/defaultAvatar.png')} alt="popcorn.png"/>
                    <Box style={styles.auditoriumNameContainer}><Text style={styles.labelText}>{userName}</Text></Box>
                </Box>
                <Box style={styles.commentDateContainer}>
                    <Text style={styles.labelText}>{commentDate}</Text>
                </Box>
            </HStack>
            
            <Stack m={4} spacing={30} style={{display:'flex', flex:3}}>
                <Text style={styles.commentText}>
                    {commentContent}
                </Text>
            </Stack>
            <Stack>
                <StarRating rating={5} style={{}} onChange={()=>{}}/>
            </Stack>
        </Pressable>
        </View>
        </Surface>
    )
}

export default Comment;