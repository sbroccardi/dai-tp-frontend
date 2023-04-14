import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

function App(): JSX.Element {
  // Disable hardware back button
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
  <SafeAreaView style={{flex: 1}}>
    <RootNavigator />
  </SafeAreaView> 
  );
}

export default App;
