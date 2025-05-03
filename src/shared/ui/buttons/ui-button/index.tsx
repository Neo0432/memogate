import {JSX} from 'react';
import {Pressable} from 'react-native';
import {ICustomButtonProps} from '@shared/ui/buttons';

export default function UIButton({
  style = {},
  onPress,
  onPressIn,
  onPressOut,
  disabled,
  children,
}: ICustomButtonProps): JSX.Element {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={style}>
      {children}
    </Pressable>
  );
}
