import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

export const styles = StyleSheet.create({
  keyboardAvoidingViewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  pageContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },

  substrate: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 42,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 34,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.grayscale.color100,
  },
});
