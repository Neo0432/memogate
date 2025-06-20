import {StyleProp, ViewStyle} from 'react-native';

export interface IDropdownFilter {
  data: {label: any; value: any}[];
  value?: any[];
  onChange: (value: any[]) => void;
  onBlur?: () => void;
  disabled?: boolean;
  visibleSelectedItem?: boolean;
  leftIcon?: (visible?: boolean) => JSX.Element;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  renderRightIcon?: (visible?: boolean) => JSX.Element;
  maxHeight?: number;
  renderItem?: (item: any, selected?: Boolean) => JSX.Element;
}
