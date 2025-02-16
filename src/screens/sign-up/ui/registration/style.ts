import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/ui/uikit';

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

  headerText: {
    ...typography.T_2_SemiBold_28pt,
    paddingBottom: 4, //I dont wont to create one mere View xD
  },

  form: {
    flexDirection: 'column',
    gap: 16,
  },
});
