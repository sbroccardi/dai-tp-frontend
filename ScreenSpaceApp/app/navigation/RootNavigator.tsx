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
import ConfirmDeleteProfileScreen from '../ui/screens/ConfirmDelete/ConfirmDeleteProfile/ConfirmDeleteProfileScreen';
import ProfilePrivateScreen from '../ui/screens/profile/profilePrivate/ProfilePrivateScreen';
import CinemaList from '../ui/screens/cinemaList/CinemaList';
import AuditoriumList from '../ui/screens/auditoriumList/AuditoriumList';
import CreateAuditorium from '../ui/screens/CreateAuditorium/CreateAuditorium';
import ConfirmDeleteAuditorium from '../ui/screens/ConfirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditorium';
import UpdateAuditorium from '../ui/screens/updateAuditorium/UpdateAuditorium';
import CreateCinema from '../ui/screens/createCinema/CreateCinema';
import ConfirmDeleteCinema from '../ui/screens/ConfirmDelete/ConfirmDeleteCinema/ConfirmDeleteCinema';
import UpdateCinema from '../ui/screens/updateCinema/UpdateCinema';
import PrivateMoviesListScreenUI from '../ui/screens/PrivateMoviesList/PrivateMoviesListScreenUI';
import CreateScreeningUI from '../ui/screens/CreateScreening/CreateScreeningUI';
import ListScreeningUIPrivate from '../ui/screens/ListScreeningPrivate/ListScreeningUIPrivate';

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

  // eslint-disable-next-line react/no-unstable-nested-components
  function MoviesStack({navigation}) {
    return (
      <Stack.Navigator initialRouteName="MoviesList">
        <Stack.Screen name="MoviesList" component={PrivateMoviesListScreenUI} />
        <Stack.Screen name="ScreeningList" component={ListScreeningUIPrivate} />
        <Stack.Screen
          name="CreateScreeningStack"
          component={CreateScreeningStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CreateScreeningStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CreateScreening" component={CreateScreeningUI} />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CinemasStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CinemasList" component={CinemaList} />
        <Stack.Screen name="AuditoriumsStack" component={AuditoriumsStack} />
        <Stack.Screen name="CreateCinemaStack" component={CreateCinemaStack} />
        <Stack.Screen name="UpdateCinemaStack" component={UpdateCinemaStack} />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function AuditoriumsStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="AuditoriumList" component={AuditoriumList} />
        <Stack.Screen name="CreateAuditorium" component={CreateAuditorium} />
        <Stack.Screen name="UpdateAuditorium" component={UpdateAuditorium} />
        <Stack.Screen
          name="ConfirmDeleteAuditorium"
          component={ConfirmDeleteAuditorium}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CreateCinemaStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="CreateCinema" component={CreateCinema} />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function UpdateCinemaStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="UpdateCinema" component={UpdateCinema} />
        <Stack.Screen
          name="ConfirmDeleteCinema"
          component={ConfirmDeleteCinema}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function ProfileStack({navigation}) {
    return (
      <Stack.Navigator>
        <Stack.Screen name="My Profile" component={ProfilePrivateScreen} />
        <Stack.Screen
          name="ConfirmDelete"
          component={ConfirmDeleteProfileScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={reactNavigationTheme} >
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
          <Stack.Screen
            options={{headerShown: false}}
            name="MoviesStack"
            component={MoviesStack}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="CinemasStack"
            component={CinemasStack}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ProfileStack"
            component={ProfileStack}
          />
          {/* <Stack.Screen
              options={{headerShown: false}}
              name="CreateScreening"
              component={CreateScreening}
            />
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
