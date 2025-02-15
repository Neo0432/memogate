import {Controller, FieldErrors} from 'react-hook-form';
import {View} from 'react-native';
import {styles} from './style';
import {FormTextInputWithCheck} from '@screens/sign-up/ui/form-text-input-with-check';
import InputInvalidMessage from '@screens/sign-up/ui/invalid-message';
import {FormPasswordInput} from '@shared/ui/form/form-password-input';
import {IFormInput} from '@screens/sign-up/ui/registration';

interface IFormProps {
  errors: FieldErrors<IFormInput>;
}

export function RegistrationForm({errors}: IFormProps) {
  return (
    <>
      <Controller
        render={({field, fieldState}) => (
          <View style={styles.inputContainer}>
            <FormTextInputWithCheck
              field={field}
              fieldState={fieldState}
              label="Name"
              placeholder="Enter your first name"
            />
            {InputInvalidMessage(errors.name)}
          </View>
        )}
        name="name"
      />
      <Controller
        render={({field, fieldState}) => (
          <View style={styles.inputContainer}>
            <FormTextInputWithCheck
              field={field}
              fieldState={fieldState}
              label="E-mail"
              placeholder="Enter your e-mail"
              hasValidation={true}
            />
            {InputInvalidMessage(errors.email)}
          </View>
        )}
        name="email"
      />
      <Controller
        render={({field, fieldState}) => (
          <View style={styles.inputContainer}>
            <FormPasswordInput
              field={field}
              fieldState={fieldState}
              label="Password"
              placeholder="Enter your password"
              hasValidation={true}
              customStyles={
                fieldState.isDirty && fieldState.isTouched
                  ? fieldState.error
                    ? styles.incorrectInput
                    : undefined
                  : undefined
              }
            />
            {InputInvalidMessage(errors.password)}
          </View>
        )}
        name="password"
      />
      <Controller
        render={({field, fieldState}) => (
          <View style={styles.inputContainer}>
            <FormPasswordInput
              field={field}
              fieldState={fieldState}
              label="Confirm password"
              placeholder="Confirm your password"
              hasValidation={true}
              customStyles={
                fieldState.isDirty && fieldState.isTouched
                  ? fieldState.error
                    ? styles.incorrectInput
                    : styles.correctInput
                  : undefined
              }
            />
            {InputInvalidMessage(errors.passwordConfirm)}
          </View>
        )}
        name="passwordConfirm"
      />
    </>
  );
}
