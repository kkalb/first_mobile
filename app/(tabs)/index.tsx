import React from 'react';
import { Button, View } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

import { getToken, searchFood } from '@/services/FatsecretApi';
import FoodList from '@/templates/FoodList';

const Index = () => {
  const [accessToken, setAccessToken] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState({});

  const onChangeHandler = (searchString: string) => {
    setSearchText(searchString);
  };

  const onSearchHandler = async () => {
    // console.log(searchText);
    const result = await searchFood(searchText, accessToken.access_token);
    setSearchResults(result.foods.food);
    // console.log(JSON.stringify(result, null, 2));
  };

  const saveTokenHandler = async () => {
    const token = await getToken();
    // console.log(`setting token to: ${token.access_token}`);
    setAccessToken(token);
  };

  return (
    <View className="flex-1 items-center justify-start">
      <Button
        title={accessToken ? 'Token valid' : 'Get Token'}
        onPress={saveTokenHandler}
      />
      <SearchBar
        onSearchPress={onSearchHandler}
        onChangeText={onChangeHandler}
      />

      <FoodList foods={searchResults} />
    </View>
  );
};

export default Index;
