import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  inputContainer: {
    gap: 2,
  },

  inputFocused: {
    borderBottomColor: colors.grayscale.color800,
    color: colors.grayscale.color800,
  },

  form: {
    flexDirection: 'column',
    gap: 16,
  },

  headerText: {
    ...typography.T_2_SemiBold_28pt,
    paddingBottom: 4, //I dont wont to create one mere View xD
  },
});
