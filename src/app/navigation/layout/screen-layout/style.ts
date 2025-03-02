import {StyleSheet} from 'react-native';
import {colors} from '@shared/ui/uikit';

export const layoutStyles = StyleSheet.create({
  layout: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.grayscale.color200,
    paddingTop: 4,
    paddingInline: 16,
    gap: 24,
  },
});
