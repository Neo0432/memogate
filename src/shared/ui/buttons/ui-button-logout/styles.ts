import {StyleSheet} from 'react-native';
import {colors, effects} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  logoutButton: {
    width: 42,
    height: 42,
    position: 'static',
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow1,
  },
  customPressed: {
    width: 42,
    height: 42,
    backgroundColor: colors.grayscale.color500,
  },
});
