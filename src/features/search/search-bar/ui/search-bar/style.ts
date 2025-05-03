import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@shared/styles';

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
    height: 42,
  },

  searchTextInput: {
    width: '100%',
    ...typography.B_1_Medium_16pt,
  },
});
