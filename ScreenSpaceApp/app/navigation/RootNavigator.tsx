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
import ProfilePrivateScreen from '../ui/screens/profile/profilePrivate/ProfilePrivateScreen';
import ProfilePublicScreen from '../ui/screens/profile/profilePublic/ProfilePublicScreen';
import FiltersScreen from '../ui/screens/filters/FiltersScreen';
import UpdateAuditoriumScreen from '../ui/screens/updateAuditorium/UpdateAuditoriumScreen';
import UpdateCinemaScreen from '../ui/screens/updateCinema/UpdateCinemaScreen';
import Movies from '../ui/screens/movies/Movies';
import ConfirmDeleteAccountScreenUI from '../ui/screens/confirmDelete/ConfirmDeleteAcccount/ConfirmDeleteAccountScreenUI';
import ConfirmDeleteAccountScreen from '../ui/screens/confirmDelete/ConfirmDeleteAcccount/ConfirmDeleteAccountScreen';
import ConfirmDeleteAuditoriumScreenUI from '../ui/screens/confirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditoriumScreenUI';
import ConfirmDeleteAuditoriumScreen from '../ui/screens/confirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditoriumScreen';
import ConfirmDeleteCinemaScreen from '../ui/screens/confirmDelete/ConfirmDeleteCinema/ConfirmDeleteCinemaScreen';
import ConfirmDeleteScreeningScreen from '../ui/screens/confirmDelete/ConfirmDeleteScreening/ConfirmDeleteScreeningScreen';
import CreateAuditoriumScreen from '../ui/screens/CreateAuditorium/CreateAuditoriumScreen';
import CreateCinemaScreen from '../ui/screens/createCinema/CreateCinemaScreen';
import ListAuditoriumScreenUI from '../ui/screens/ListAuditorium/ListAuditoriumScreenUI';
import ListAuditoriumScreen from '../ui/screens/ListAuditorium/ListAuditoriumScreen';
import PrivateMoviesScreen from '../ui/screens/PrivateMoviesList/PrivateMoviesListScreen';
import PrivateScreeningsScreenUI from '../ui/screens/PrivateSreenings/PrivateScreeningsScreenUI';
import PrivateScreeningsScreen from '../ui/screens/PrivateSreenings/PrivateScreeningsScreen';
import {UserContext} from '../UserContext';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PrivateMoviesListScreen from '../ui/screens/PrivateMoviesList/PrivateMoviesListScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const {user} = useContext(UserContext);

  const screenOptions = {
    tabBarStyle: {
      backgroundColor: '#16171D',
      borderRadius: 50,
    },
    tabBarItemStyle: {
      backgroundColor: '#21242D',
      //borderRadius: 12,
    },
  };

  return (
    <NavigationContainer theme={reactNavigationTheme}>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{title: ''}}
          />
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
        <Tab.Navigator {...{screenOptions}}>
          <Stack.Group>
            <Stack.Screen
              options={{headerShown: false}}
              name="Cinemas"
              component={PrivateMoviesListScreen}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="MoviesList"
              component={PrivateMoviesListScreen}
            />
            <Stack.Screen
              name="ProfilePrivate"
              component={ProfilePrivateScreen}
              options={{headerShown: false}}
            />
            {/* <Stack.Screen
            name="UpdateAuditorium"
            component={UpdateAuditoriumScreen}
            options={{title: I18n.t('UpdateAuditorium')}}
          />
          <Stack.Screen
            name="UpdateCinema"
            component={UpdateCinemaScreen}
            options={{title: I18n.t('updateCinema')}}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ConfirmDeleteAccount"
            component={ConfirmDeleteAccountScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ConfirmDeleteAuditorium"
            component={ConfirmDeleteAuditoriumScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ConfirmDeleteCinema"
            component={ConfirmDeleteCinemaScreen}
          /> */}
          </Stack.Group>
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
