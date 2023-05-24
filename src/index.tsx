import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { usePostActions } from './store/postsStore';
import FlashMessage from 'react-native-flash-message';

export default function App() {
  const { fetchPosts } = usePostActions();
  console.log(fetchPosts());
  return (
    <View className="flex-1 bg-red-200 justify-center ">
      <FlashMessage position="top" />
      <Text className="text-center">Basic Boilerplate</Text>
      <StatusBar style="auto" />
    </View>
  );
}
