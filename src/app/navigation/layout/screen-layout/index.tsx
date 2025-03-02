import {ReactNode} from 'react';
import {View} from 'react-native';
import {layoutStyles} from './style';

export function ScreenLayout({children}: {children: ReactNode}): JSX.Element {
  return <View style={layoutStyles.layout}>{children}</View>;
}
