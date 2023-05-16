import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ToolbarPublicUser(props:{onPress: any; title?:string|undefined}){
    const {onPress, title="OK"} = props;
    return(
        <View style={styles.toolbarPublicUser}>
            <Pressable onPress={onPress} style={styles.leftArrowButtonContainer}>
                <Icon name='arrow-left' size={18} style={styles.leftArrowButtonColor}/>
            </Pressable>
        </View>
    )   
}