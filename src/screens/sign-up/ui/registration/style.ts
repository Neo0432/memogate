import {StyleSheet} from 'react-native';
import {colors} from '@shared/ui/uikit';

export const styles = StyleSheet.create({
  keyboardAvoidingViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  pageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: colors.additional.coreblue,
  },

  substrate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 34,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.grayscale.color100,
  },
});
