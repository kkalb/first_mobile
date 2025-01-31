import { Stack } from 'expo-router/stack';
import { NativeWindStyleSheet } from 'nativewind';

import { UserProvider } from '@/services/UserContext';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <UserProvider>
      <Stack
        initialRouteName="(tabs)"
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
}
