import {colors, effects, typography} from '@shared/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 72,
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 20,
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow2,
  },
  username: {
    ...typography.H_2_Medium_18pt,
    color: colors.grayscale.color800,
  },
});
