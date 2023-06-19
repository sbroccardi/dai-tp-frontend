import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useContext} from 'react';

import {reactNavigationTheme} from '../ui/styles/theme';

import I18n from '../assets/localization/I18n';

import LoginScreen from '../ui/screens/login/LoginScreen';
import LoginPrivateScreen from '../ui/screens/login/loginPrivate/LoginPrivateScreen';
import LoginPublicScreen from '../ui/screens/login/loginPublic/LoginPublicScreen';
import RecoverPasswordScreen from '../ui/screens/recoverPassword/RecoverPasswordScreen';
import SignUpScreen from '../ui/screens/signUp/SignUpScreen';
import EnterResetCodeScreen from '../ui/screens/recoverPassword/EnterResetCodeScreen';
import EnterNewPasswordScreen from '../ui/screens/recoverPassword/EnterNewPasswordScreen';

import Movies from '../ui/screens/movies/Movies';
import {UserContext} from '../UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const {user} = useContext(UserContext);

  return (
    <NavigationContainer theme={reactNavigationTheme}>
      {!user ? (
        <Stack.Navigator>
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: ''}}
            />
          </Stack.Group>
          {/* PRIVATE */}
          <Stack.Group>
            <Stack.Screen
              name="LoginPrivate"
              component={LoginPrivateScreen}
              options={{title: I18n.t('loginAs') + ' ' + I18n.t('cinema')}}
            />
            <Stack.Screen
              name="RecoverPassword"
              component={RecoverPasswordScreen}
              options={{title: I18n.t('forgotPassword')}}
            />
            <Stack.Screen
              name="EnterResetCode"
              component={EnterResetCodeScreen}
              options={{title: I18n.t('enterResetCode')}}
            />
            <Stack.Screen
              name="EnterNewPassword"
              component={EnterNewPasswordScreen}
              options={{title: I18n.t('enterNewPassword')}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{title: I18n.t('signUp')}}
            />
          </Stack.Group>
          {/* PUBLIC */}
          <Stack.Group>
            <Stack.Screen
              name="LoginPublic"
              component={LoginPublicScreen}
              options={{
                title: I18n.t('loginButton'),
                animationTypeForReplace: !user ? 'pop' : 'push',
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      ) : user.type === 'privado' ? (
        <Tab.Navigator>
          <Stack.Screen name="PrivateMovies" component={Movies} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator>
          <Stack.Screen name="PublicMovies" component={Movies} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}

export default RootNavigator;
