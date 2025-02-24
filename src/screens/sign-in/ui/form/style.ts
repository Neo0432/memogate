import {StyleSheet} from 'react-native';
import {colors} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  inputContainer: {
    gap: 2,
  },

  inputFocused: {
    borderBottomColor: colors.grayscale.color800,
    color: colors.grayscale.color800,
  },
});
