import {Controller} from 'react-hook-form';
import {View} from 'react-native';
import FormTextInput from '@shared/ui/form/form-text-input';
import {FormPasswordInput} from '@shared/ui/form/form-password-input';
import {styles} from './style';

export function SignInForm(): JSX.Element {
  return (
    <>
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
    </>
  );
}
