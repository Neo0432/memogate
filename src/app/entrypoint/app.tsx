import {JSX} from 'react';
import {StatusBar, View} from 'react-native';
import {Navigation} from '@app/navigation';

export function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Navigation />
    </>
  );
}
