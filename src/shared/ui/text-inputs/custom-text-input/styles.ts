import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputsLabel: {
    ...typography.H_4_SemiBold_16pt,
    color: colors.grayscale.color700,
  },

  inputInitial: {
    ...typography.H_4_SemiBold_16pt,

    flex: 1,
    paddingRight: 40,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayscale.color600,
  },
  inputTyping: {
    borderBottomColor: colors.grayscale.color800,
  },
});
