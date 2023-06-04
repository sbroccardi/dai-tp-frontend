import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from '../styles/theme';
import { Button, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export default function ToolbarPublicUser(props:{onPress: any; title?:string|undefined}){
    const {onPress, title="ToolbarTitle"} = props;
    
    return(
        <View style={styles.toolbarPublicUser}>
            <Pressable style={styles.leftArrowButtonContainer} onPress={onPress}>
                <Icon name='arrowleft' size={30} color="white"/>
            </Pressable>
            <Text style={styles.toolbarPublicUserText}>
                {title}
            </Text>
        </View>
    )   
}