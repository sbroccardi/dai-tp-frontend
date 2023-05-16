import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../ui/screens/login/LoginScreen';
import LoginPrivateScreen from '../ui/screens/login/loginPrivate/LoginPrivateScreen';
import LoginPublicScreen from '../ui/screens/login/loginPublic/LoginPublicScreen';
import RecoverPasswordScreen from '../ui/screens/recoverPassword/RecoverPasswordScreen';
import SignUpScreen from '../ui/screens/signUp/SignUpScreen';
import I18n from '../assets/localization/I18n';
import PublicUserStackNavigator from './PublicUserStackNavigator';
import Movies from '../ui/screens/movies/Movies';

const Stack = createNativeStackNavigator();

function LoginStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }} />
            <Stack.Screen name="LoginPrivate" component={LoginPrivateScreen} options={{ title: I18n.t('loginAs') + ' ' + I18n.t('cinema') }} />
            <Stack.Screen name="LoginPublic" component={LoginPublicScreen} options={{ title: I18n.t('loginButton') }} />
            <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} options={{ title: I18n.t('forgotPassword') }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: I18n.t('signUp') }} />
            {/*NO DEJAR ESTA LINEA EN ESTE STACK NAVIGATOR*/}<Stack.Screen name="Movies" component={Movies} />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;