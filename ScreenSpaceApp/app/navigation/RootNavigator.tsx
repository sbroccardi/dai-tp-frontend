import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {reactNavigationTheme} from '../ui/styles/theme';

import I18n from '../assets/localization/I18n';

import LoginScreen from '../ui/screens/login/LoginScreen';
import LoginPrivateScreen from '../ui/screens/login/loginPrivate/LoginPrivateScreen';
import LoginPublicScreen from '../ui/screens/login/loginPublic/LoginPublicScreen';
import RecoverPasswordScreen from '../ui/screens/recoverPassword/RecoverPasswordScreen';
import SignUpScreen from '../ui/screens/signUp/SignUpScreen';
import EnterResetCodeScreen from '../ui/screens/recoverPassword/EnterResetCodeScreen';
import EnterNewPasswordScreen from '../ui/screens/recoverPassword/EnterNewPasswordScreen';
import ProfilePrivateScreen from '../ui/screens/profile/profilePrivate/ProfilePrivateScreen';
import ProfilePublicScreen from '../ui/screens/profile/profilePublic/ProfilePublicScreen';
import FiltersScreen from '../ui/screens/filters/FiltersScreen';
import UpdateAuditoriumScreen from '../ui/screens/auditorium/UpdateAuditoriumScreen';
import UpdateCinemaScreen from '../ui/screens/cinema/UpdateCinemaScreen';

import Movies from '../ui/screens/movies/Movies';

const Stack = createNativeStackNavigator();
const isLoggedIn = false;
const isPrivate = true;

function RootNavigator() {
  return (
    <NavigationContainer theme={reactNavigationTheme}>
      <Stack.Navigator>
        {isLoggedIn ? (
          // Screens for logged in users
          isPrivate ? (
            // Screens for private users
            <Stack.Group>
            </Stack.Group>
          ) : (
            // Screens for public users
            <Stack.Group>
              
            </Stack.Group>
          )
        ) : (
          // Auth screens
          
          <Stack.Group>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{title: ''}}
            />
            <Stack.Screen
              name="LoginPrivate"
              component={LoginPrivateScreen}
              options={{title: I18n.t('loginAs') + ' ' + I18n.t('cinema')}}
            />
            <Stack.Screen
              name="LoginPublic"
              component={LoginPublicScreen}
              options={{title: I18n.t('loginButton')}}
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
            <Stack.Screen
            options={{headerShown:false}} 
            name="Movies" 
            component={Movies}
             />
             <Stack.Screen
            name="ProfilePrivate"
            component={ProfilePrivateScreen}
            options={{title: 'Profile'}}/>
            <Stack.Screen
            name="UpdateAuditorium"
            component={UpdateAuditoriumScreen}
            options={{title: I18n.t('UpdateAuditorium')}}
            />
            <Stack.Screen
            name="UpdateCinema"
            component={UpdateCinemaScreen}
            options={{title: I18n.t('updateCinema')}}
            />
         
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
