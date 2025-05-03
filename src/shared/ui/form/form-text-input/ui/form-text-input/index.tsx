import {Text} from 'react-native';
import {styles} from './styles';
import {IFormTextInputProps} from '../../model/types';

import {CustomTextInput} from '@shared/ui/text-inputs';

export default function FormTextInput({
  field,
  fieldState,
  label,
  customStyles,
  children,
  ...uiTextInputProps
}: IFormTextInputProps): JSX.Element {
  return (
    <CustomTextInput
      {...uiTextInputProps}
      renderTop={<Text style={styles.inputsLabel}>{label}</Text>}
      value={field.value}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      customStyles={customStyles}>
      {children}
    </CustomTextInput>
  );
}
