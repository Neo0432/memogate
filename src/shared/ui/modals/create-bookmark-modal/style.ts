import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2a2a2a80',
  },

  closeButton: {
    top: 12,
    right: 12,
    backgroundColor: 'transparent',
  },

  substrate: {
    position: 'relative',
    width: '80%',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 24,
    gap: 24,
    paddingBottom: 32,
    borderRadius: 32,
  },

  titleOfModal: {
    width: '100%',
    textAlign: 'center',
    ...typography.H_1_SemiBold_20pt,
    color: colors.grayscale.color800,
  },

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
