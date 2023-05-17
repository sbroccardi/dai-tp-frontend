import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { IconButton } from "@react-native-material/core";
import { styles } from '../styles/theme';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function ToolbarPublicUser(props:{onPress: any; title?:string|undefined}){
    const {onPress, title="MovieName"} = props;
    return(
        <View style={styles.toolbarPublicUser}>
            <View style={styles.leftArrowButtonContainer}>
                <Icon name="arrow-left" size={30} color='white'/>
            </View>
            <Text style={styles.toolbarPublicUserText}>
                {title}
            </Text>
        </View>
    )   
}