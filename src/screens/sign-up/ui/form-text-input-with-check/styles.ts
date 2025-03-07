import {StyleSheet} from 'react-native';
import {colors} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  inputFieldIcon: {marginLeft: -20},

  correctInput: {
    borderBottomColor: colors.additional.success,
    color: colors.additional.success,
  },

  incorrectInput: {
    borderBottomColor: colors.additional.error,
    color: colors.additional.error,
  },
});
