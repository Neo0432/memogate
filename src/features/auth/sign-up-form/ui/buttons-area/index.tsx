import {UIButtonWithText, UITextButton} from '@shared/ui/buttons';
import {colors, typography} from '@shared/styles';
import {Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {UnAuthNavStackParams} from '@app/navigation/unauth-nav';
import {styles} from './style';
import {IButtonsArea} from '../../model/types';

export function ButtonsArea({isValid, isSubmitting, onSubmit}: IButtonsArea) {
  const navigation = useNavigation<NavigationProp<UnAuthNavStackParams>>();

  return (
    <View style={styles.buttonArea}>
      <UIButtonWithText
        disabled={!isValid}
        isLoading={isSubmitting}
        colorVariant="primary"
        size="large"
        onPress={onSubmit}
        style={styles.submitButton}
        buttonTextStyle={[
          typography.B_1_Medium_16pt,
          {color: colors.grayscale.color100},
        ]}>
        Register
      </UIButtonWithText>
      <View style={styles.textUnderButton}>
        <Text style={typography.B_2_Regular_16pt}>
          Already have an account?
        </Text>
        <UITextButton
          onPress={() => navigation.navigate('Login')}
          customTextStyle={typography.B_1_Medium_16pt}>
          Sign in
        </UITextButton>
      </View>
    </View>
  );
}
