import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {styles} from './style';
import {AuthLogo} from '@shared/ui/auth-logo';
import {RegistrationForm} from '@features/auth/sign-up-form';

export default function Registration() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'height' : 'height'}
      keyboardVerticalOffset={-66}
      style={styles.keyboardAvoidingViewContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.pageContainer}>
          <AuthLogo />
          <View style={styles.substrate}>
            <RegistrationForm />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
