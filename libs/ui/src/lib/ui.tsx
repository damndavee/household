import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface UiProps {
  text: string;
}

export function Ui(props: UiProps) {
  return (
    <View className="bg-green-200 p-4">
      <Text>Welcome to The {props.text}!</Text>
    </View>
  );
}

export default Ui;
