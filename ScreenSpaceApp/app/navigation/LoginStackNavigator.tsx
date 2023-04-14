import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../ui/screens/login/LoginScreen';
import LoginPrivateScreen from '../ui/screens/login/loginPrivate/LoginPrivateScreen';
import LoginPublicScreen from '../ui/screens/login/loginPublic/LoginPublicScreen';
import RecoverPasswordScreen from '../ui/screens/recoverPassword/RecoverPasswordScreen';
import SignUpScreen from '../ui/screens/signUp/SignUpScreen';

const Stack = createNativeStackNavigator();

function LoginStackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} options={{ title: '' }} />
            <Stack.Screen name="LoginPrivate" component={LoginPrivateScreen} options={{ title: 'Log in as cinema' }} />
            <Stack.Screen name="LoginPublic" component={LoginPublicScreen} options={{ title: 'Log in with Google' }} />
            <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} options={{ title: 'Reset password' }} />
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ title: 'Register' }} />
        </Stack.Navigator>
    );
}

export default LoginStackNavigator;