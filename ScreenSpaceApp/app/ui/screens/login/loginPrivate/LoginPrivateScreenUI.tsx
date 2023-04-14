import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import ButtonPrimary from '../../../components/ButtonPrimary';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from '../../../styles/theme';

const LoginPrivateScreenUI = ({ }) => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.iconImage} source={require('../../../../assets/images/popcorn.png')} />
            </View>
            <View style={styles.form}>
                <TextInput style={styles.input} value={email} placeholder="Enter your email address" keyboardType="email-address" />
                <TextInput style={styles.input} value={password} placeholder="Enter your password" keyboardType="default" />
            </View>
            <View style={styles.loginButtonContainer}>
                <ButtonPrimary title='Log in' onPress={() => console.log('EMAIL:' + { email } + 'PASSWORD:' + { password })} />
            </View>
            <View style={styles.signupContainer}>
                <Text style={styles.signupText}>New to MyScreenSpace? </Text>
                <Text style={styles.signupLinkText} onPress={() => navigation.navigate('SignUp')}>Create an account</Text>
            </View>
        </View>
    );
};

export default LoginPrivateScreenUI;
