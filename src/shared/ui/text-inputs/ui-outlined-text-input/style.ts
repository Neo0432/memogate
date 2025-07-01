import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.grayscale.color600,
    borderRadius: 14,
    paddingRight: 40,
    paddingLeft: 8,
  },

  containerFocused: {
    borderColor: colors.additional.lightblue,
  },

  containerDisabled: {
    borderColor: colors.grayscale.color500,
    backgroundColor: '#f2f2f257',
  },

  inputsLabel: {
    ...typography.H_4_SemiBold_16pt,
    color: colors.grayscale.color700,
  },

  inputInitial: {
    ...typography.H_4_SemiBold_16pt,
    color: colors.additional.lightblue,
  },
});
