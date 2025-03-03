import {PropsWithChildren, ReactNode, useRef} from 'react';
import Swipeable, {
  SwipeableMethods,
} from 'react-native-gesture-handler/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import {styles} from './style';

export interface CardProps {
  onSwipe?: () => void;
  renderRightAction: (progress: SharedValue<number>) => ReactNode;
}

export default function Card({
  onSwipe,
  renderRightAction,
  children,
}: PropsWithChildren<CardProps>) {
  const swipeableView = useRef<SwipeableMethods>(null);
  return (
    <Swipeable
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
