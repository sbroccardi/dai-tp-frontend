import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../styles/theme';
import I18n from '../../../../assets/localization/I18n';
import ButtonPrimary from '../../../components/ButtonPrimary';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LoginPublicScreenUI = ({ }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    return (
        <View style={styles.container}>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary title={I18n.t('loginButton')} onPress={() => navigation.navigate('Movies')}/>
            </View>
        </View>
    );
};

export default LoginPublicScreenUI;
