import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import RootNavigator from './navigation/RootNavigator';

function App(): JSX.Element {
  // Disable hardware back button
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return <RootNavigator />;
  // <SafeAreaView style={{flex: 1}}>
  //   <LoginScreen />
  // </SafeAreaView>
}

export default App;
