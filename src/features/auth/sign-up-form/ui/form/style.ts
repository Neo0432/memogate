import {StyleSheet} from 'react-native';
import {colors, typography} from '@shared/styles';

export const styles = StyleSheet.create({
  inputContainer: {
    gap: 2,
  },

  correctInput: {
    borderBottomColor: colors.additional.success,
    color: colors.additional.success,
  },

  incorrectInput: {
    borderBottomColor: colors.additional.error,
    color: colors.additional.error,
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
