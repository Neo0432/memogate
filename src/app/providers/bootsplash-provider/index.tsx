import {AnimatedBootSplash} from '@shared/ui/bootsplash';
import {ReactNode, useEffect, useState} from 'react';
import {View} from 'react-native';
import BootSplash from 'react-native-bootsplash';

const hideSplash = async () => {
  await BootSplash.hide({fade: true});
};

export function BootSplashProvider({children}: {children: ReactNode}) {
  const [splashVisible, setSplashVisible] = useState<boolean>(true);

  useEffect(() => {
    hideSplash();
  }, []);

  return (
    <View style={{flex: 1}}>
      {children}
      {splashVisible && (
        <AnimatedBootSplash onAnimationEnd={() => setSplashVisible(false)} />
      )}
    </View>
  );
}
