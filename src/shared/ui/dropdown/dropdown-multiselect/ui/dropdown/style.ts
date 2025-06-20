import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@shared/styles';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    height: 28,
    gap: 4,
    paddingHorizontal: 8,
    borderRadius: 32,
    ...effects.shadow1,
    backgroundColor: colors.grayscale.color100,
  },

  text: {
    color: colors.grayscale.color700,
  },

  containerDropdown: {
    borderRadius: 24,
    width: '100%',
    top: 8,
    maxWidth: SCREEN_WIDTH - 32,
    overflow: 'hidden',
    ...effects.shadow2,
  },

  itemContainer: {},

  itemText: {
    ...typography.B_1_Medium_16pt,
    color: colors.grayscale.color700,
  },

  selectedItem: {
    backgroundColor: colors.additional.apricot,
  },
  selectedItemText: {
    color: colors.additional.lightblue,
  },
});
