import {PropsWithChildren} from 'react';
import {
  UIButtonWithLoading,
  IButtonWithLoadingProps,
} from '@/shared/ui/buttons';
import {styles} from './style';

export default function UIRoundedButton({
  style,
  children,
  ...uiButtonWithLoadingProps
}: PropsWithChildren<IButtonWithLoadingProps>): JSX.Element {
  return (
    <UIButtonWithLoading
      {...uiButtonWithLoadingProps}
      style={[styles.initialState, style]}>
      {children}
    </UIButtonWithLoading>
  );
}
