import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  buttonTextStyle: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color100,
  },
});
