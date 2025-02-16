import {JSX} from 'react';
import {Text} from 'react-native';
import {UIButtonWithLoading} from '@/shared/ui/buttons';
import {IButtonWithTextProps} from '@/shared/ui/buttons';

export default function UiButtonWithText({
  children,
  buttonTextStyle = {},
  ...buttonProps
}: IButtonWithTextProps): JSX.Element {
  return (
    <UIButtonWithLoading {...buttonProps}>
      <Text style={buttonTextStyle}>{children}</Text>
    </UIButtonWithLoading>
  );
}
