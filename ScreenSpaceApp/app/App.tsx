import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import RootNavigator from './navigation/RootNavigator';
import { nativeBaseTheme } from './ui/styles/theme';

function App(): JSX.Element {
  // Disable hardware back button
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <NativeBaseProvider theme={nativeBaseTheme}>
        <RootNavigator />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

export default App;