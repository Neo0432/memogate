import {GreenCheck} from '@shared/ui/text-inputs/text-input-icons';
import {FormTextInput} from '@shared/ui/form/form-text-input';
import {styles} from './styles';

export function FormTextInputWithCheck({
  fieldState,
  hasValidation,
  ...uiCustomTextInput
}: any) {
  return (
    <FormTextInput
      {...uiCustomTextInput}
      customStyles={
        fieldState.isDirty && fieldState.isTouched && hasValidation
          ? fieldState.invalid
            ? styles.incorrectInput
            : styles.correctInput
          : undefined
      }>
      {fieldState.isTouched && fieldState.isDirty && hasValidation ? (
        fieldState.invalid ? null : (
          <GreenCheck style={styles.inputFieldIcon} />
        )
      ) : null}
    </FormTextInput>
  );
}
