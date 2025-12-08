import "../../global.css"

import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}

export default RootLayout;
