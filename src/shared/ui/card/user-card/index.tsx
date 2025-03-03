import {styles} from './style';
import {Text, View} from 'react-native';
import {IUser} from '@entities/user/types.ts';
import {LogoutButton} from '@shared/ui/buttons';

export default function UserCard({user}: {user: IUser}) {
  return (
    <View style={styles.card}>
      <Text style={styles.username}>{user.name}</Text>
      <LogoutButton />
    </View>
  );
}
