import { View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

import { getToken } from '@/services/FatsecretApi';
import type { Token } from '@/services/UserContext';
import { useUserContext } from '@/services/UserContext';

const SettingsScreen = () => {
  const { state, dispatch } = useUserContext();
  const { user } = state;
  console.log(user);
  const setToken = (token: Token) => {
    dispatch({ type: 'SET_TOKEN', payload: { token } });
  };

  const saveTokenHandler = async () => {
    const token = await getToken();
    setToken(token);
  };

  return (
    <View className="flex-1 items-center bg-new-white p-5">
      <Card className="w-full max-w-md p-2.5">
        <Card.Title
          title="User Token Information"
          subtitle="Check your authentication token"
        />
        <Card.Content>
          <Text variant="bodyLarge">
            {user.token.access_token === ''
              ? '❌ No Token set'
              : '✅ Token valid'}
          </Text>
          <Text variant="bodyMedium">
            Expires at:{' '}
            {user.token.expires_in === 0
              ? 'N/A'
              : user.token.expires_at.toString()}
          </Text>
          <Text variant="bodyMedium">
            Type: {user.token.token_type || 'N/A'}
          </Text>
          <Text variant="bodyMedium">Scope: {user.token.scope || 'N/A'}</Text>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={saveTokenHandler}>
            {user.token ? 'Refresh Token' : 'Get Token'}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

export default SettingsScreen;
