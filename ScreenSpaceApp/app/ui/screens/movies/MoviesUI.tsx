import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import ToolbarPublicUser from '../../components/ToolbarPublicUser';
import { styles } from '../../styles/theme';

const MoviesUI = ({
}) => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.toolbarPublicUserContainer}>
                <ToolbarPublicUser title='HardcodedName' onPress={() => navigation.goBack()}/>
            </View>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary onPress={''} title={'hardcode'}/>
            </View>
        </View>
    );
}

export default MoviesUI;