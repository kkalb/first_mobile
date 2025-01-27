import { Link } from 'expo-router';
import { View } from 'react-native';

const Home = () => (
  <View>
    <Link href="/about" className="font-normal text-white underline">
      Go to About screen
    </Link>
  </View>
);

export default Home;
