import {SharedValue} from 'react-native-reanimated';
import {ReactNode} from 'react';

export interface CardProps {
  onSwipe?: () => void;
  renderRightAction: (progress: SharedValue<number>) => ReactNode;
}
