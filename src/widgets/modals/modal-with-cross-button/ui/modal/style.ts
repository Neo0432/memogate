import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  titleOfModal: {
    width: '100%',
    textAlign: 'center',
    ...typography.H_1_SemiBold_20pt,
    color: colors.grayscale.color800,
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
});
