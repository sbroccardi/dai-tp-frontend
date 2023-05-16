import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Movies from '../ui/screens/movies/Movies';

const Stack = createNativeStackNavigator();

function PublicUserStackNavigator(){
    return(
        <Stack.Navigator initialRouteName='Movies'>
            <Stack.Screen name='Movies' component={Movies} options={{title:'Movies'}}/>
        </Stack.Navigator>
    )
}

export default PublicUserStackNavigator;