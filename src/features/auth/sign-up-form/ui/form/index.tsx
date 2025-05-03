import {Controller} from 'react-hook-form';
import {Text, View} from 'react-native';
import {styles} from './style';
import {FormPasswordInput} from '@shared/ui/form/form-password-input';
import {FormTextInputWithCheck} from '@widgets/inputs/form-text-input-with-check';
import InputInvalidMessage from '../invalid-message';
import {useSignUpForm} from '@features/auth/sign-up-form/hooks/use-sign-up-form.ts';
import {useSignUpSubmit} from '@features/auth/sign-up-form/hooks/use-sign-up-submit.ts';
import {ButtonsArea} from '../buttons-area';

export function RegistrationForm() {
  const methods = useSignUpForm();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
  } = methods;

  const onSubmit = useSignUpSubmit();
  return (
    <>
      <View style={styles.form}>
        <Text style={styles.headerText}>Sign up</Text>
        <Controller
          control={control}
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
          control={control}
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
          control={control}
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
          control={control}
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
                      : undefined
                    : undefined
                }
              />
              {InputInvalidMessage(errors.passwordConfirm)}
            </View>
          )}
          name="passwordConfirm"
        />
      </View>
      <ButtonsArea
        isValid={isValid}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
}
