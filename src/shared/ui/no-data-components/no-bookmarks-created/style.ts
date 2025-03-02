import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 24,
    gap: 16,
    borderRadius: 24,
    ...effects.shadow2,
    backgroundColor: colors.grayscale.color100,
  },
  text: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color700,
    textAlign: 'center',
    flexShrink: 1,
  },
});
