import { Stack } from 'expo-router';
import React from 'react';
export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: 'Home',
      }}
    />
  );
}
