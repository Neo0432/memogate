import {JSX} from 'react';
// import {Navigation} from '@app/navigation';
import {StatusBar, View} from 'react-native';
import {Registration} from '@screens/sign-up';

export function App(): JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/*<Navigation />*/}
      <Registration />
    </>
  );
}
