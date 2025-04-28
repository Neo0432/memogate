import {StyleSheet} from 'react-native';
import {colors, effects} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  tabBarStyle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    height: 84,
    paddingInline: 20,
    paddingTop: 12,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 0,

    ...effects.shadow1,
  },

  tabBarIconStyle: {
    color: colors.grayscale.color800,
  },
});
