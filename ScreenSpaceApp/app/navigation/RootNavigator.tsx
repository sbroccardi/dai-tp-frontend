import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { reactNavigationTheme } from '../ui/styles/theme';

import LoginStackNavigator from './LoginStackNavigator';
import PublicUserStackNavigator from './PublicUserStackNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer theme={reactNavigationTheme}>
            <Stack.Navigator initialRouteName="LoginStackNavigator" screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;