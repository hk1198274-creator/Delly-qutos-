import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
