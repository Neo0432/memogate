import {JSX, PropsWithChildren, useState} from 'react';
import {UIButton} from '@shared/ui/buttons';
import {getButtonStyle, buttonStyle} from '@shared/ui/buttons/button-styles';
import {LoadAnimatedIndicator} from './loading-indicator';
import {IButtonWithLoadingProps} from '@shared/ui/buttons';

export default function UIButtonWithLoading({
  size,
  colorVariant,
  style = {},
  customPressedStyle,
  onPress,
  disabled,
  isLoading,
  children,
}: PropsWithChildren<IButtonWithLoadingProps>): JSX.Element {
  const [pressed, setPressed] = useState<boolean>(false);
  const baseStyle = getButtonStyle({disabled, size, colorVariant});
  const pressedStyle =
    colorVariant === 'primary'
      ? buttonStyle.primaryPressed
      : buttonStyle.secondaryPressed;

  return (
    <UIButton
      disabled={disabled || isLoading}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        baseStyle,
        style,
        pressed && (customPressedStyle ? customPressedStyle : pressedStyle),
      ]}>
      {isLoading ? (
        <LoadAnimatedIndicator colorVariant={colorVariant} />
      ) : (
        children
      )}
    </UIButton>
  );
}
