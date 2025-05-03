import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BookmarkNavigator} from '@app/navigation/auth-nav/bookmarks-stack';
import {ScreenLayoutSafeArea} from '@app/navigation/layout';
import {colors, typography} from '@shared/styles';
import {styles} from './style';
import {Bookmarks, Search} from '@app/navigation/ui/tab-icons';
import {SearchNavigator} from '@app/navigation/auth-nav/search-stack';

const Tab = createBottomTabNavigator();

export function AuthorizedNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'BookmarksScreen'}
      screenLayout={ScreenLayoutSafeArea}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.grayscale.color800,
        tabBarInactiveTintColor: colors.grayscale.color600,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: {...typography.C_1_Regular_12pt},
      }}>
      <Tab.Screen
        name="BookmarksScreen"
        options={{title: 'Bookmarks', tabBarIcon: Bookmarks}}
        component={BookmarkNavigator}
      />
      <Tab.Screen
        name="Search"
        options={{tabBarIcon: Search}}
        component={SearchNavigator}
      />
    </Tab.Navigator>
  );
}
