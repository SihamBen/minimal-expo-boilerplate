import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 bg-red-200 justify-center ">
      <Text className="text-center">Basic Boilerplate</Text>
      <StatusBar style="auto" />
    </View>
  );
}
