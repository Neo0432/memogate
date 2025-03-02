import {StyleSheet} from 'react-native';
import {colors} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  backgroundLabel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 76,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
    paddingRight: 16,
    paddingVertical: 28,
    // backgroundColor: colors.additional.error,
  },

  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },

  actionText: {
    color: colors.grayscale.color100,
    fontWeight: 'bold',
  },
});
