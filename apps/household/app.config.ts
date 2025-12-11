import { ExpoConfig } from 'expo/config';

const config = (): ExpoConfig => ({
  name: 'Household',
  slug: 'household',
  version: '0.0.1',
  androidStatusBar: {
    translucent: true,
  },
  orientation: 'portrait',
  icon: './assets/images/icon-ios.png',
  scheme: ['household'],
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.anonymous.syshousehold',
    icon: './assets/images/icon-ios.png',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/icon-android.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
    package: 'com.anonymous.syshousehold',
  },
  web: {
    bundler: 'metro',
    favicon: './assets/images/icon-ios.png',
  },
  plugins: [
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 300,
        imageHeight: 300,
        resizeMode: 'contain',
        backgroundColor: '#FAF3E0',
      },
    ],
  ],
});

export default config;
