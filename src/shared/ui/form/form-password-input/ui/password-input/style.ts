import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

export const styles = StyleSheet.create({
  correctInput: {
    borderBottomColor: colors.additional.success,
    color: colors.additional.success,
  },

  incorrectInput: {
    borderBottomColor: colors.additional.error,
    color: colors.additional.error,
  },

  inputFocused: {
    borderBottomColor: colors.grayscale.color800,
    color: colors.grayscale.color800,
  },
});
