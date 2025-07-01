import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingRight: 4,
    paddingLeft: 16,

    backgroundColor: colors.additional.lightblue,
    borderRadius: 18,
  },

  textStyle: {
    ...typography.H_4_SemiBold_16pt,
    color: colors.grayscale.color200,
  },
});
