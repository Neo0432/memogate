import {ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './style';

export default function UnAuthorizedLayout({children}: {children: ReactNode}) {
  return <View style={styles.layout}>{children}</View>;
}
