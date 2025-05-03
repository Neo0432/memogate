import {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '@shared/styles';

export function ScreenLayoutSafeArea({children}: {children: ReactNode}) {
  const insets = useSafeAreaInsets();

  const safeAreaViewStyle = {
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    backgroundColor: colors.grayscale.color200,
  };

  return (
    <View style={[{flex: 1, width: '100%'}, safeAreaViewStyle]}>
      {children}
    </View>
  );
}
