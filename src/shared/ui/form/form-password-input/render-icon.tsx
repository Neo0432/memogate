import {JSX, Dispatch, SetStateAction} from 'react';
import {GreenCheck, EyeToggle} from '@/shared/ui/text-inputs/text-input-icons';

import {colors} from '@/shared/ui/uikit';
import {styles} from './styles';

export function RenderIcon({
  fieldState,
  fieldName,
  isPasswordShown,
  setIsPasswordShown,
  hasValidation,
}: {
  fieldState: any;
  fieldName: string;
  isPasswordShown: boolean;
  setIsPasswordShown: Dispatch<SetStateAction<boolean>>;
  hasValidation?: boolean;
}): JSX.Element {
  if (
    fieldState.isTouched &&
    fieldState.isDirty &&
    !fieldState.invalid &&
    fieldName !== 'password' &&
    fieldName !== 'passwordConfirm'
  ) {
    return <GreenCheck style={styles.inputFieldIcon} />;
  }
  return (
    <EyeToggle
      isPasswordShown={isPasswordShown}
      onPress={() => setIsPasswordShown(!isPasswordShown)}
      color={
        fieldState.isTouched && fieldState.isDirty
          ? fieldState.invalid && hasValidation
            ? colors.additional.error
            : colors.grayscale.color800
          : colors.grayscale.color600
      }
      style={styles.inputFieldIcon}
    />
  );
}
