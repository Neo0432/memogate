import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from './style';
import {AuthLogo} from '@shared/ui/auth-logo';
import {FormProvider, useForm} from 'react-hook-form';
import {schema} from '../../model/schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {RegistrationForm} from '@screens/sign-up/ui/form';

export interface IFormInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function Registration() {
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const {
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
  } = methods;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.pageContainer}>
          <AuthLogo />
          <View style={styles.substrate}>
            <FormProvider {...methods}>
              <RegistrationForm errors={errors} />
            </FormProvider>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
