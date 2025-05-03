import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

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
