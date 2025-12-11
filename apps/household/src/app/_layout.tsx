import '../../global.css';

import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as SplashScreen from 'expo-splash-screen';

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
};

export default RootLayout;
