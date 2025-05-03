import {createStackNavigator} from '@react-navigation/stack';
import {ScreenLayout} from '@app/navigation/layout';
import {BookmarkCardHeader} from '@app/navigation/ui/headers/bookmark-card-header';
import {SearchScreen} from '@screens/tab-screens';
import {BookmarkScreen} from '@screens/bookmark';

export type SearchStackNavigatorProps = {
  SearchScreen: undefined;
  BookmarksCard: {bookmarkId: string};
};

const Stack = createStackNavigator<SearchStackNavigatorProps>();

export function SearchNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SearchScreen"
      screenOptions={{headerShown: false}}
      screenLayout={ScreenLayout}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="BookmarksCard"
        options={{
          headerShown: true,
          header: BookmarkCardHeader,
        }}
        component={BookmarkScreen}
      />
    </Stack.Navigator>
  );
}
