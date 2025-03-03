import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    height: 42,
  },

  searchField: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.grayscale.color100,
    borderRadius: 30,
    paddingInline: 24,
    // paddingVertical: 9,
    height: 42,
  },

  searchTextInput: {
    width: '100%',
    ...typography.B_1_Medium_16pt,
  },

  searchButton: {
    width: 42,
    height: 42,
    position: 'static',
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow1,
  },
  customPressed: {backgroundColor: colors.grayscale.color500},
});
