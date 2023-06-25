import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import { reactNavigationTheme } from '../ui/styles/theme';
import I18n from '../assets/localization/I18n';
import LoginScreen from '../ui/Screens/Login/LoginScreen';
import LoginPrivateScreen from '../ui/Screens/Login/LoginPrivate/LoginPrivateScreen';
import LoginPublicScreen from '../ui/Screens/Login/LoginPublic/LoginPublicScreen';
import RecoverPasswordScreen from '../ui/Screens/RecoverPassword/RecoverPasswordScreen';
import SignUpScreen from '../ui/Screens/SignUp/SignUpScreen';
import EnterResetCodeScreen from '../ui/Screens/RecoverPassword/EnterResetCodeScreen';
import EnterNewPasswordScreen from '../ui/Screens/RecoverPassword/EnterNewPasswordScreen';
import Movies from '../ui/Screens/Movies/Movies';
import { UserContext } from '../UserContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmDeleteProfileScreen from '../ui/Screens/ConfirmDelete/ConfirmDeleteProfile/ConfirmDeleteProfileScreen';
import ProfilePrivateScreen from '../ui/Screens/Profile/ProfilePrivate/ProfilePrivateScreen';
import CinemaList from '../ui/Screens/CinemaList/CinemaList';
import AuditoriumList from '../ui/Screens/AuditoriumList/AuditoriumList';
import CreateAuditorium from '../ui/Screens/CreateAuditorium/CreateAuditorium';
import ConfirmDeleteAuditorium from '../ui/Screens/ConfirmDelete/ConfirmDeleteAuditorium/ConfirmDeleteAuditorium';
import UpdateAuditorium from '../ui/Screens/UpdateAuditorium/UpdateAuditorium';
import CreateCinema from '../ui/Screens/CreateCinema/CreateCinema';
import ConfirmDeleteCinema from '../ui/Screens/ConfirmDelete/ConfirmDeleteCinema/ConfirmDeleteCinema';
import UpdateCinema from '../ui/Screens/UpdateCinema/UpdateCinema';
import PrivateMoviesListScreenUI from '../ui/Screens/PrivateMoviesList/PrivateMoviesListScreenUI';
import CreateScreeningUI from '../ui/Screens/CreateScreening/CreateScreeningUI';
import ListScreeningUIPrivate from '../ui/Screens/ListScreeningPrivate/ListScreeningUIPrivate';
import ConfirmDeleteProfileScreenUI from '../ui/Screens/ConfirmDelete/ConfirmDeleteProfile/ConfirmDeleteProfileScreenUI';
import ConfirmDeleteCinemaUI from '../ui/Screens/ConfirmDelete/ConfirmDeleteCinema/ConfirmDeleteCinemaUI';
import CreateCinemaUI from '../ui/Screens/CreateCinema/CreateCinemaUI';
import CinemaListUI from '../ui/Screens/CinemaList/CinemaListUI';
import ProfilePrivateScreenUI from '../ui/Screens/Profile/ProfilePrivate/ProfilePrivateScreenUI';
import UpdateCinemaUI from '../ui/Screens/UpdateCinema/UpdateCinemaUI';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function RootNavigator() {
  const { user } = useContext(UserContext);

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
  function MoviesStack({ navigation }) {
    return (
      <Stack.Navigator initialRouteName="MoviesList">
        <Stack.Screen
          name="MoviesList"
          component={PrivateMoviesListScreenUI}
          options={{
            headerTitle: I18n.t('movies'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ScreeningList"
          component={ListScreeningUIPrivate}
          options={{
            headerTitle: '/////movie',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CreateScreeningStack"
          component={CreateScreeningStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CreateScreeningStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CreateScreening"
          component={CreateScreeningUI}
          options={{
            headerTitle: I18n.t('createScreening'),
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CinemasStack({ navigation }) {
    return (
      <Stack.Navigator initialRouteName="CinemasList">
        <Stack.Screen
          name="CinemasList"
          component={CinemaListUI}
          options={{
            headerTitle: I18n.t('cinemas'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="AuditoriumsStack" component={AuditoriumsStack} />
        <Stack.Screen name="CreateCinemaStack" component={CreateCinemaStack} />
        <Stack.Screen name="UpdateCinemaStack" component={UpdateCinemaStack} />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function AuditoriumsStack({ navigation }) {
    return (
      <Stack.Navigator initialRouteName="AuditoriumList">
        <Stack.Screen
          name="AuditoriumList"
          component={AuditoriumList}
          options={{
            headerTitle: I18n.t('auditoriums'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="CreateAuditorium" component={CreateAuditorium} />
        <Stack.Screen
          name="UpdateAuditorium"
          component={UpdateAuditorium}
          options={{
            headerTitle: I18n.t('updateAuditorium'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ConfirmDeleteAuditorium"
          component={ConfirmDeleteAuditorium}
          options={{
            headerTitle: I18n.t('confirmDeleteAuditorium'),
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function CreateCinemaStack({ navigation }) {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="CreateCinema"
          component={CreateCinemaUI}
          options={{
            headerTitle: I18n.t('createCinema'),
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function UpdateCinemaStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="UpdateCinema"
          component={UpdateCinemaUI}
          options={{
            headerTitle: I18n.t('updateCinema'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ConfirmDeleteCinema"
          component={ConfirmDeleteCinemaUI}
          options={{
            headerTitle: I18n.t('confirmDeleteCinema'),
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function ProfileStack({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={ProfilePrivateScreenUI}
          options={{
            headerTitle: I18n.t('profile'),
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="ConfirmDelete"
          component={ConfirmDeleteProfileScreenUI}
          options={{
            headerTitle: I18n.t('confirmDeleteAccount'),
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={reactNavigationTheme}>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: '' }}
          />
          <Stack.Group>
            <Stack.Screen
              name="LoginPrivate"
              component={LoginPrivateScreen}
              options={{ title: I18n.t('loginAs') + ' ' + I18n.t('cinema') }}
            />
            <Stack.Screen
              name="RecoverPassword"
              component={RecoverPasswordScreen}
              options={{ title: I18n.t('forgotPassword') }}
            />
            <Stack.Screen
              name="EnterResetCode"
              component={EnterResetCodeScreen}
              options={{ title: I18n.t('enterResetCode') }}
            />
            <Stack.Screen
              name="EnterNewPassword"
              component={EnterNewPasswordScreen}
              options={{ title: I18n.t('enterNewPassword') }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{ title: I18n.t('signUp') }}
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
        <Tab.Navigator {...{ screenOptions }}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="MoviesStack"
            component={MoviesStack}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="CinemasStack"
            component={CinemasStack}
          />
          <Stack.Screen
            options={{ headerShown: false }}
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
