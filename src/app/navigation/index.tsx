import {createStackNavigator} from '@react-navigation/stack';
import {UnAuthorizedNavigator} from '@app/navigation/unauth-nav';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

export type NavigationType = {
  Unauthorized: undefined;
  Authorized: undefined;
};

const Stack = createStackNavigator<NavigationType>();

export function Navigation() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isAuthorized ? (
          <Stack.Screen name="Unauthorized" component={UnAuthorizedNavigator} />
        ) : (
          <Stack.Screen name="Authorized" component={() => <></>} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
