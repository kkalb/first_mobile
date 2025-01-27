import { Stack } from 'expo-router';

import { Welcome } from '@/templates/Welcome';

const Home = () => (
  <>
    <Stack.Screen
      options={{
        title: 'Kalorienzähler',
      }}
    />
    <Welcome />
  </>
);

export default Home;
