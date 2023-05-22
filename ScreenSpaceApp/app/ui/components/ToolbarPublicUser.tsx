import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from '../styles/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import 'react-icons/fa'

export default function ToolbarPublicUser(props:{onPress: any; title?:string|undefined}){
    const {onPress, title="MovieName"} = props;
    
    return(
        <View style={styles.toolbarPublicUser}>
            <Text>
                hola
            </Text>
            <Text style={styles.toolbarPublicUserText}>
                {title}
            </Text>
        </View>
    )   
}