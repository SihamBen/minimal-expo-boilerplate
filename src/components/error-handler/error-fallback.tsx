import * as React from 'react';

import { Text, View, Pressable } from 'react-native';

export function ErrorFallback({ resetErrorBoundary }: any) {
  return (
    <View>
      <View>
        <Text> Something went wrong: </Text>
        <Pressable onPress={resetErrorBoundary}>
          <Text>Try Again</Text>
        </Pressable>
      </View>
    </View>
  );
}
