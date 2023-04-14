import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from '../ui/styles/theme';

import LoginStackNavigator from './LoginStackNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName="LoginStackNavigator">
                <Stack.Screen name="LoginStackNavigator" component={LoginStackNavigator} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;