import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';

const Index = () => {
  const [text, setText] = React.useState('');

  const onChangeHandler = (search: string) => {
    setText(search);
  };

  const onSearchHandler = () => {
    // console.log(text);
    setText(text);
  };

  return (
    <SearchBar onSearchPress={onSearchHandler} onChangeText={onChangeHandler} />
  );
};

export default Index;
