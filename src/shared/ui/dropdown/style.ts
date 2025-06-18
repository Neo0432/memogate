import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

export const styles = StyleSheet.create({
  item: {
    borderRadius: 23,
    overflow: 'hidden',
  },

  search: {
    borderRadius: 28,
  },
  container: {
    borderRadius: 24,
    overflow: 'hidden',
    position: 'absolute',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: colors.grayscale.color600,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  disabledDropdown: {
    backgroundColor: colors.grayscale.color400,
    borderColor: colors.grayscale.color300,
  },
});
