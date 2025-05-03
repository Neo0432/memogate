import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

export const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 128,
    borderRadius: 32,
    backgroundColor: colors.grayscale.color600,
  },
});
