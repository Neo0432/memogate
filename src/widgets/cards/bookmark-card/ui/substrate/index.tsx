import {PropsWithChildren, useRef} from 'react';
import Swipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './style';
import {Vibration} from 'react-native';
import {CardProps} from '../../model/types';

export default function Card({
  onSwipe,
  renderRightAction,
  children,
}: PropsWithChildren<CardProps>) {
  const swipeableView = useRef<SwipeableMethods>(null);
  return (
    <Swipeable
      onSwipeableCloseStartDrag={() => Vibration.vibrate([0, 10])}
      containerStyle={styles.containerStyle}
      ref={swipeableView}
      renderRightActions={(progress: SharedValue<number>) =>
        renderRightAction(progress)
      }
      onSwipeableOpen={() => {
        onSwipe?.();
        swipeableView.current?.close();
      }}
      rightThreshold={76}
      overshootRight={false}>
      {children}
    </Swipeable>
  );
}
