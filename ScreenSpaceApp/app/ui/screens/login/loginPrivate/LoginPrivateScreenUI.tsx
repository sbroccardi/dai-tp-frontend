import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import ButtonPrimary from '../../../components/ButtonPrimary';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/theme';
import I18n from '../../../../assets/localization/I18n';

const LoginPrivateScreenUI = ({ }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.iconBigImage} source={require('../../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} value={email} placeholder="Enter your email address" keyboardType="email-address" />
                <TextInput style={styles.input} value={password} placeholder="Enter your password" keyboardType="default" />
            </View>
            <View style={styles.forgotPasswordContainer}>
                <Text style={styles.signupLinkText} onPress={() => navigation.navigate('RecoverPassword')}>{I18n.t('forgotPassword')}</Text>
            </View>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary title={I18n.t('login')} onPress={() => console.log('BUTTON PRESSED!')} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>{I18n.t('newToScreenSpace')} </Text>
                <Text style={styles.signupLinkText} onPress={() => navigation.navigate('SignUp')}>{I18n.t('signUp')}</Text>
            </View>
        </View>
    );
};

export default LoginPrivateScreenUI;
