import {JSX} from 'react';
import {FieldError} from 'react-hook-form';
import {Text} from 'react-native';
import {typography, colors} from '@/shared/ui/uikit';

export default function InputInvalidMessage(
  error: FieldError | undefined,
): JSX.Element | null {
  return error ? (
    <Text
      style={[typography.B_4_Regular_14pt, {color: colors.additional.error}]}>
      {error.message}
    </Text>
  ) : null;
}
