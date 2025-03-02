import {StyleSheet} from 'react-native';
import {colors} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 20,
    minHeight: 72,
    backgroundColor: colors.grayscale.color100,
  },

  containerStyle: {
    width: '100%',
    borderRadius: 20,
    minHeight: 72,
    backgroundColor: colors.additional.error,
    overflow: 'visible',
  },
});
