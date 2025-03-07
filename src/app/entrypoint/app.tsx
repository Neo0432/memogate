import {JSX} from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@app/navigation';
import {ReduxProvider} from '@app/providers/redux-provider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {colors} from '@shared/ui/uikit';
import {PortalProvider} from '@gorhom/portal';

export function App(): JSX.Element {
  changeNavigationBarColor(colors.grayscale.color100);
  return (
    <ReduxProvider>
      <PortalProvider>
        <SafeAreaProvider>
          <GestureHandlerRootView>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="dark-content"
            />
            <Navigation />
          </GestureHandlerRootView>
        </SafeAreaProvider>
      </PortalProvider>
    </ReduxProvider>
  );
}
