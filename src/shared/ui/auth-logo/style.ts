import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
    width: '100%',
    marginTop: 64,
  },
  label: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color100,
  },
});
