import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 72,
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 20,
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow2,
  },
  title: {
    ...typography.H_2_Medium_18pt,
    color: colors.grayscale.color800,
  },
  description: {
    ...typography.B_4_Regular_14pt,
    color: colors.grayscale.color800,
    maxWidth: 280,
  },
});
