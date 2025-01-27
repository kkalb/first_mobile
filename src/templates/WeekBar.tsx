import { View } from 'react-native';

import { WeekButton } from './WeekButton';

const WeekBar = () => (
  <View className="m-2 flex-1 flex-row justify-between">
    <WeekButton text="MO" />
    <WeekButton text="DI" />
    <WeekButton text="MI" />
    <WeekButton text="DO" />
    <WeekButton text="FR" />
    <WeekButton text="SA" />
    <WeekButton text="SO" />
  </View>
);

export { WeekBar };
