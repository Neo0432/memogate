import {JSX} from 'react';
import {StatusBar, View} from 'react-native';
import {Navigation} from '@app/navigation';
import {ReduxProvider} from '@app/providers/redux-provider';

export function App(): JSX.Element {
  return (
    <>
      <ReduxProvider>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Navigation />
      </ReduxProvider>
    </>
  );
}
