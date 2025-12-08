import { Text, View } from 'react-native';

const RootPage = () => {
  return (
    <View className="justify-center items-center flex-1 gap-4">
      <View className="border-2 rounded-[5] p-4">
        <Text>Hello from inner View</Text>
      </View>
      <Text className="color-amber-600">Hello from Expo Router!@#</Text>
    </View>
  );
};

export default RootPage;
