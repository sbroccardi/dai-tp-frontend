import React, { useEffect } from 'react';
import { BackHandler, SafeAreaView } from 'react-native';
import { NativeBaseProvider, extendTheme } from 'native-base';
import RootNavigator from './navigation/RootNavigator';

const theme = extendTheme({
  colors: {
    primary: {
      50: "#fff5dc",
      100: "#ffe9b5",
      200: "#fddc8f",
      300: "#f7ce6d",
      400: "#f5c249",
      500: "#eeb737",
      600: "#e5ac29",
      700: "#d39e22",
      800: "#b88c26",
      900: "#9f7b28"
    },
  },
  fonts: {
    heading: "Poppins-SemiBold",
    body: "Poppins-Medium",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});

function App(): JSX.Element {
  // Disable hardware back button
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true);
    return () => BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <NativeBaseProvider theme={theme}>
        <RootNavigator />
      </NativeBaseProvider>
    </SafeAreaView>
  );
}

export default App;
