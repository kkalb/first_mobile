import { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export interface Food {
  food_id: number;
  brand_name: string;
  food_name: string;
  food_type: string;
  food_description: string;
}

interface FoodsProps {
  foods: Food[];
}

const ListHeader = memo(() => (
  <View className="mb-6 space-y-4 bg-gray-100 p-4 text-center">
    <Text className="text-3xl font-bold text-gray-900">
      Welcome to the Food List!
    </Text>
  </View>
));

const FoodList = ({ foods }: FoodsProps) => {
  const renderItem = ({ item }: any) => (
    <View className="mb-4 rounded-lg bg-white shadow-lg">
      <View className="p-4">
        <Text className="text-xl font-semibold text-new-graay">
          {item.brand_name}
        </Text>
        <Text className="text-lg text-gray-600">{item.food_name}</Text>
        <Text className="text-sm italic text-new-gray">{item.food_type}</Text>
        <Text className="mt-2 text-base text-gray-700">
          {item.food_description}
        </Text>
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    listContainer: {
      padding: 16,
      paddingBottom: 100, // Padding for the bottom, if needed for safe areas
    },
  });

  return (
    <FlatList
      ListHeaderComponent={ListHeader}
      data={foods}
      renderItem={renderItem}
      keyExtractor={(item) => item.food_id.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default FoodList;
