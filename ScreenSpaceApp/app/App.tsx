import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import LoginScreen from './ui/screens/login/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
        <LoginScreen />
    </SafeAreaView>
  );
}

export default App;
