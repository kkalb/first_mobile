import { Button, Text, View } from 'react-native';

import { getToken } from '@/services/FatsecretApi';
import type { Token } from '@/services/UserContext';
import { useUserContext } from '@/services/UserContext';

const SettingsScreen = () => {
  const { state, dispatch } = useUserContext();
  const { user } = state;

  const setToken = (token: Token) => {
    dispatch({ type: 'SET_TOKEN', payload: { token } });
  };

  const saveTokenHandler = async () => {
    const token = await getToken();
    // console.log(`setting token to: ${token}`);
    setToken(token);
  };

  return (
    <View className="flex">
      <Button
        title={user.token ? 'Token valid' : 'Get Token'}
        onPress={saveTokenHandler}
      />
      <Text>
        User Token: {user.token.access_token ? 'Valid' : 'No token set'}
      </Text>
      <Text>Expires in: {user.token.expires_in || 'No token set'}</Text>
      <Text>Type: {user.token.token_type || 'No token set'}</Text>
      <Text>Scope: {user.token.scope || 'No token set'}</Text>
    </View>
  );
};

export default SettingsScreen;
