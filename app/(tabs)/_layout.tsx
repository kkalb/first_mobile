import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useMemo } from 'react';

type FontAwesomeIconName = keyof typeof FontAwesome.glyphMap;

const newBlue = '#A9B4C2';

const tabBarIcon = (name: FontAwesomeIconName) => (
  <FontAwesome size={28} name={name} color={newBlue} />
);

export default function TabLayout() {
  const screenOptions = useMemo(
    () => ({
      tabBarActiveTintColor: newBlue,
    }),
    [],
  );

  return (
    <Tabs screenOptions={screenOptions}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => tabBarIcon('home'),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: () => tabBarIcon('info-circle'),
        }}
      />
    </Tabs>
  );
}
