import {StyleProp, TextStyle} from 'react-native';
import {Dispatch, ReactNode, SetStateAction} from 'react';
import {ControllerFieldState} from 'react-hook-form';

export interface ITextInputProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: (...event: any[]) => void;
  onBlur?: () => void;
  isSecured?: boolean;
  customStyles?: StyleProp<TextStyle>;
  renderTop?: any;
  children?: ReactNode;
  multiline?: boolean;
}

export interface PropsType {
  type: string;
  fieldState: ControllerFieldState;
  color?: string;
  style?: object;
  isPasswordShown?: boolean;
  setIsPasswordShown?: Dispatch<SetStateAction<boolean>>;
}

export interface EyeToggleProps {
  isPasswordShown: boolean;
  color?: string;
  style?: object;
  onPress: () => void;
}
