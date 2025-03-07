import {FormProvider, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from '@screens/sign-in/model/schema';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './style';
import {AuthLogo} from '@shared/ui/auth-logo';
import {SignInForm} from '@screens/sign-in/ui/form';
import {ButtonsArea} from '@screens/sign-in/ui/buttons-area';
import {signInUser} from '@entities/user/model/actions.ts';
import {useAppDispatch} from '@shared/store';

export interface IFormInput {
  email: string;
  password: string;
}

export default function SignIn() {
  const dispatch = useAppDispatch();
  const methods = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const {
    handleSubmit,
    formState: {isValid, isSubmitting},
  } = methods;

  const onSubmit: SubmitHandler<IFormInput> = data => {
    dispatch(signInUser(data));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      keyboardVerticalOffset={-66}
      style={styles.keyboardAvoidingViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.pageContainer}>
          <AuthLogo />
          <View style={styles.substrate}>
            <View style={styles.form}>
              <Text style={styles.headerText}>Sign in</Text>
              <FormProvider {...methods}>
                <SignInForm />
              </FormProvider>
            </View>
            <ButtonsArea
              isValid={isValid}
              isSubmitting={isSubmitting}
              onSubmit={handleSubmit(onSubmit)}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
