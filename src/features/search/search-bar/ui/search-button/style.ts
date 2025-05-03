import {StyleSheet} from 'react-native';
import {colors, effects} from '@shared/styles';

export const styles = StyleSheet.create({
  searchButton: {
    width: 42,
    height: 42,
    position: 'static',
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow1,
  },
  customPressed: {backgroundColor: colors.grayscale.color500},
});
