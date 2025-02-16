import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {styles} from './style';
import {AuthLogo} from '@shared/ui/auth-logo';
import {FormProvider, useForm} from 'react-hook-form';
import {schema} from '../../model/schema';
import {yupResolver} from '@hookform/resolvers/yup';
import {RegistrationForm} from '@screens/sign-up/ui/form';
import {ButtonsArea} from '@screens/sign-up/ui/buttons-area';

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
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      keyboardVerticalOffset={-64}
      style={styles.keyboardAvoidingViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.pageContainer}>
          <AuthLogo />
          <View style={styles.substrate}>
            <View style={styles.form}>
              <Text style={styles.headerText}>Sign up</Text>
              <FormProvider {...methods}>
                <RegistrationForm errors={errors} />
              </FormProvider>
            </View>
            <ButtonsArea
              isValid={isValid}
              isSubmitting={isSubmitting}
              onSubmit={() => handleSubmit}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
