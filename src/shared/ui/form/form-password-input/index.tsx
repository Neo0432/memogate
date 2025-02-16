import {JSX, useState} from 'react';
import FormTextInput from '@/shared/ui/form/form-text-input';
import {RenderIcon} from './render-icon';
import {styles} from './styles';

export function FormPasswordInput({
  field,
  fieldState,
  hasValidation,
  ...uiPasswordInputProps
}: any): JSX.Element {
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const customStyles =
    fieldState.isDirty && fieldState.isTouched
      ? fieldState.invalid
        ? styles.incorrectInput
        : undefined
      : undefined;

  return (
    <FormTextInput
      {...uiPasswordInputProps}
      field={field}
      fieldState={fieldState}
      isSecured={isPasswordShown}
      customStyles={hasValidation ? customStyles : undefined}>
      <RenderIcon
        fieldState={fieldState}
        fieldName={field.name}
        isPasswordShown={isPasswordShown}
        setIsPasswordShown={setIsPasswordShown}
        hasValidation={hasValidation}
      />
    </FormTextInput>
  );
}
