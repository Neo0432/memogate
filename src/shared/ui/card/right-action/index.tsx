import {View} from 'react-native';
import TrashIcon from '@shared/assets/icons/sweapable/trash.svg';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {styles} from './styles';

export default function RightBookmarkAction({
  progress,
}: {
  progress: SharedValue<number>;
}): JSX.Element {
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.3, 1]),
    transform: [
      {scale: interpolate(progress.value, [0, 1], [0.8, 1])},
      {translateX: interpolate(progress.value, [0, 1], [50, 16])},
    ],
  }));

  return (
    <View style={styles.backgroundLabel}>
      <Animated.View style={animatedStyle}>
        <TrashIcon width={24} height={24} />
      </Animated.View>
    </View>
  );
}
