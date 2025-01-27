import { Stack } from 'expo-router';
import { NativeWindStyleSheet } from 'nativewind';

NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Kalorienzähler',
        }}
      />

      <Stack.Screen
        name="about"
        options={{
          headerTitle: 'About',
        }}
      />
    </Stack>
  );
}
