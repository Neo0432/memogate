import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  form: {
    width: '100%',
    flexDirection: 'column',
    gap: 8,
  },

  submitButtonText: {
    ...typography.B_2_Regular_16pt,
    color: colors.grayscale.color200,
  },

  inputsLabel: {
    ...typography.H_4_SemiBold_16pt,
    color: colors.grayscale.color700,
  },
});
