import {colors, typography} from '@/shared/styles';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color700,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 74,
    paddingInline: 16,
  },
  containerSelected: {
    backgroundColor: colors.grayscale.color300,
  },
});
