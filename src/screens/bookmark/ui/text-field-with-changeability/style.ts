import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  fieldContainer: {
    width: '100%',
    flexDirection: 'column',
    gap: 4,
  },

  title: {
    ...typography.B_3_Bold_14pt,
    color: colors.grayscale.color800,
  },

  value: {
    ...typography.B_4_Regular_14pt,
    color: colors.grayscale.color800,
  },

  valueLink: {
    color: colors.additional.error,
  },
});
