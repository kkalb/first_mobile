import { Button, View } from 'react-native';

const onPress = () => {
  ('asd');
};

interface TextProps {
  text: string;
}

const WeekButton = ({ text }: TextProps) => (
  <View className="h-8 w-10 rounded-md border border-new-blue">
    <Button
      testID={`button${text}`}
      onPress={() => {
        onPress();
      }}
      color="#5E6572"
      title={text}
    />
  </View>
);

export { WeekButton };
