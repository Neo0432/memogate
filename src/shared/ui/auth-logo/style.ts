import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    height: '100%',
  },
  label: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color100,
  },
});
