import {styles} from './style';
import {Text, View} from 'react-native';
import AuthLogoImage from '@/shared/assets/images/auth-logo/auth-logo-img.svg'
export function AuthLogo() {
    console.log('image')
  return (
    <View style={styles.container}>
      <AuthLogoImage width={129} />
      <Text style={styles.label}>Save now, read later, never forget</Text>
    </View>
  );
}
