import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from '../styles/theme';
import { Button, IconButton } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

export default function HomeToolbarPublicUser(props:{onPressLeft: any; onPressRight: any; title?:string|undefined}){
    const {onPressLeft, onPressRight, title="ToolbarTitle"} = props;
    
    return(
        <View style={styles.toolbarPublicUser}>
            <Button style={styles.leftButtonContainer} onPress={onPressLeft} variant='ghost' colorScheme="white" >
                <Icon name='user' size={20} color="white"/>
            </Button>
            <Text style={styles.toolbarPublicUserText}>
                {title}
            </Text>
            <Button style={styles.leftButtonContainer} onPress={onPressLeft} variant='ghost' colorScheme="white" >
                <Icon name='filter' size={20} color="white"/>
            </Button>
        </View>
    )   
}