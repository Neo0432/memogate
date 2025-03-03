import {StyleSheet} from 'react-native';
import {colors, effects, typography} from '@/shared/ui/uikit';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 54,
    paddingInline: 16,
    paddingTop: 12,

    backgroundColor: colors.grayscale.color200,
  },
  goBackButton: {
    width: 42,
    height: 42,
    position: 'absolute',
    left: 16,
    top: '50%',
    transform: [{translateY: -10.5}], //-height * 0.5 + paddingOfParent (12)
    backgroundColor: colors.grayscale.color100,
    ...effects.shadow1,
  },
  customPressed: {backgroundColor: colors.grayscale.color500},
});
