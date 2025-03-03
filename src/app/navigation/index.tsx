import {createStackNavigator} from '@react-navigation/stack';
import {UnAuthorizedNavigator} from '@app/navigation/unauth-nav';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@shared/store';
import {selectIsLoggedIn} from '@entities/user/model/selectors.ts';
import {AuthorizedNavigator} from '@app/navigation/auth-nav';
import {ScreenLayout} from '@app/navigation/layout';

export type NavigationType = {
  Unauthorized: undefined;
  Authorized: undefined;
};

const Stack = createStackNavigator<NavigationType>();

export function Navigation() {
  const isAuthorized = useAppSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        screenLayout={ScreenLayout}>
        {!isAuthorized ? (
          <Stack.Screen name="Unauthorized" component={UnAuthorizedNavigator} />
        ) : (
          <Stack.Screen name="Authorized" component={AuthorizedNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
