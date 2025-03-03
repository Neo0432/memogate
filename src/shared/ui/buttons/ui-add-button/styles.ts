import {StyleSheet} from 'react-native';
import {colors, effects} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  addButton: {
    right: 16,
    bottom: 12,
    width: 65,
    height: 65,
    ...effects.shadow2,
    backgroundColor: colors.additional.coreblue,
    zIndex: 99,
  },
});
