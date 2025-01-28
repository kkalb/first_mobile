import { Stack } from 'expo-router/stack';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="(tabs)"
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
