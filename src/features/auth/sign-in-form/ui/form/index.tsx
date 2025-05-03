import {Controller} from 'react-hook-form';
import {Text, View} from 'react-native';
import {FormTextInput} from '@shared/ui/form/form-text-input';
import {FormPasswordInput} from '@shared/ui/form/form-password-input';
import {useSignInForm} from '../../hooks/use-sign-in-form.ts';
import {useSignInSubmit} from '../../hooks/use-sign-in-submit.ts';
import {ButtonsArea} from '../buttons-area';
import {styles} from './style';

export function SignInForm() {
  const methods = useSignInForm();
  const {
    handleSubmit,
    formState: {isValid, isSubmitting},
  } = methods;

  const onSubmit = useSignInSubmit();

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.headerText}>Sign in</Text>
        <Controller
          render={({field, fieldState}) => (
            <View style={styles.inputContainer}>
              <FormTextInput
                field={field}
                fieldState={fieldState}
                label={'E - mail'}
                placeholder={'Enter your e-mail'}
                customStyles={
                  fieldState.isDirty ? styles.inputFocused : undefined
                }
              />
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
                label={'Password'}
                placeholder={'Enter your password'}
                customStyles={
                  fieldState.isDirty ? styles.inputFocused : undefined
                }
              />
            </View>
          )}
          name="password"
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
