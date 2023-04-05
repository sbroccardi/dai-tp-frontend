import React from 'react';
import {
  SafeAreaView, View
} from 'react-native';
import LoginScreen from './ui/screens/login/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
    </SafeAreaView>
  );
}

export default App;
