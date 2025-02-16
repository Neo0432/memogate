import {StyleProp, TextStyle} from 'react-native';
import {ReactNode} from 'react';

export interface IButtonWithLoadingProps {
  size: 'large' | 'medium' | 'small';
  colorVariant: 'primary' | 'secondary';
  style?: StyleProp<TextStyle>;
  customPressedStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export interface ICustomButtonProps {
  style?: {};
  onPress: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export interface IButtonWithTextProps extends IButtonWithLoadingProps {
  buttonTextStyle?: {};
  children: ReactNode;
}

export interface ICustomTextButtonProps {
  disabled?: boolean;
  onPress: () => void;
  customTextStyle: {};
  children: ReactNode;
}
