import React from 'react';
import { View } from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

import { searchFood } from '@/services/FatsecretApi';
import { useUserContext } from '@/services/UserContext';
import type { Food } from '@/templates/FoodList';
import FoodList from '@/templates/FoodList';

const Index = () => {
  const { state } = useUserContext();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { access_token } = state.user.token;

  const [searchText, setSearchText] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<Food[]>([]);

  const onChangeHandler = (searchString: string) => {
    setSearchText(searchString);
  };

  const onSearchHandler = async () => {
    const result = await searchFood(searchText, access_token);
    console.log(JSON.stringify(result, null, 2));
    setSearchResults(result.foods.food);
  };

  return (
    <View className="m-2 flex-1 items-center justify-start">
      <SearchBar
        onSearchPress={onSearchHandler}
        onChangeText={onChangeHandler}
      />

      <FoodList foods={searchResults} />
    </View>
  );
};

export default Index;
