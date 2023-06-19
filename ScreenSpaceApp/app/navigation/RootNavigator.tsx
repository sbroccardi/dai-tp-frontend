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

import Movies from '../ui/screens/movies/Movies';
import ConfirmDeleteAccountScreenUI from '../ui/screens/ConfirmDelete/ConfirmDeleteAcccount/ConfirmDeleteAccountScreenUI';
import ConfirmDeleteAccountScreen from '../ui/screens/ConfirmDelete/ConfirmDeleteAcccount/ConfirmDeleteAccountScreen';
import ConfirmDeleteAuditoriumScreenUI from '../ui/screens/ConfirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditoriumScreenUI';
import ConfirmDeleteAuditoriumScreen from '../ui/screens/ConfirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditoriumScreen';
import ConfirmDeleteCinemaScreen from '../ui/screens/ConfirmDelete/ConfirmDeleteCinema/ConfirmDeleteCinemaScreen';
import ConfirmDeleteScreeningScreen from '../ui/screens/ConfirmDelete/ConfirmDeleteScreening/ConfirmDeleteScreeningScreen';
import CreateAuditoriumScreen from '../ui/screens/CreateAuditorium/CreateAuditoriumScreen';
import CreateCinemaScreen from '../ui/screens/createCinema/CreateCinemaScreen';
import ListAuditoriumScreenUI from '../ui/screens/ListAuditorium/ListAuditoriumScreenUI';
import ListAuditoriumScreen from '../ui/screens/ListAuditorium/ListAuditoriumScreen';
import PrivateMoviesScreen from '../ui/screens/PrivateMoviesList/PrivateMoviesListScreen';
import PrivateScreeningsScreenUI from '../ui/screens/PrivateSreenings/PrivateScreeningsScreenUI';
import PrivateScreeningsScreen from '../ui/screens/PrivateSreenings/PrivateScreeningsScreen';
import CreateScreening from '../ui/screens/CreateScreening/CreateScreening';

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
            options={{headerShown:false}} 
            name="ConfirmDeleteAccount" 
            component={ConfirmDeleteAccountScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="ConfirmDeleteAuditorium" 
            component={ConfirmDeleteAuditoriumScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="ConfirmDeleteCinema" 
            component={ConfirmDeleteCinemaScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="ConfirmDeleteScreening" 
            component={ConfirmDeleteScreeningScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="CreateAuditorium" 
            component={CreateAuditoriumScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="CreateCinema" 
            component={CreateCinemaScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="ListAuditorium" 
            component={ListAuditoriumScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="PrivateMovies" 
            component={PrivateMoviesScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="PrivateScreenings" 
            component={PrivateScreeningsScreen} 
            />
            <Stack.Screen
            options={{headerShown:false}} 
            name="CreateScreening" 
            component={CreateScreening}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
