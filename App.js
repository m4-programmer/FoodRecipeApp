import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500 text-white">
    <Text className="text-white">Open up App.js to start working on your app!</Text>
    <StatusBar style="light" />
  </View>
  );
}


