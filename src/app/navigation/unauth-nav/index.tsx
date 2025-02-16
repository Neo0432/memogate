import {createStackNavigator} from '@react-navigation/stack';
import {Registration} from '@screens/sign-up';
import {UnAuthorizedLayout} from '@app/navigation/layout';

export type UnAuthNavStackParams = {
  Login: undefined;
  Registration: undefined;
};

const Stack = createStackNavigator<UnAuthNavStackParams>();

export function UnAuthorizedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Registration"
      screenLayout={UnAuthorizedLayout}>
      <Stack.Screen name="Login" component={() => <></>} />
      <Stack.Screen name="Registration" component={() => <Registration />} />
    </Stack.Navigator>
  );
}
