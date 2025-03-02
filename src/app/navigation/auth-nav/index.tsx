import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookmarkNavigator} from '@app/navigation/auth-nav/bookmarks-stack';
import {ScreenLayoutSafeArea} from '@app/navigation/layout';

const Tab = createBottomTabNavigator();

export function AuthorizedNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'BookmarksScreen'}
      screenLayout={ScreenLayoutSafeArea}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="BookmarksScreen"
        options={{title: 'Bookmarks'}}
        component={() => <BookmarkNavigator />}
      />
      <Tab.Screen name="Search" component={() => <></>} />
    </Tab.Navigator>
  );
}
