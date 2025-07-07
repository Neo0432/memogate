import {createStackNavigator} from '@react-navigation/stack';
import {ScreenLayout} from '@app/navigation/layout';
import {BookmarksListScreen} from '@screens/tab-screens';
import {BookmarkScreen} from '@screens/bookmark';
import {BookmarkCardHeader} from '@app/navigation/ui/headers/bookmark-card-header';

export type BookmarkStackNavigatorProps = {
  BookmarksList: undefined;
  BookmarksCard: {bookmarkId: string};
};

const Stack = createStackNavigator<BookmarkStackNavigatorProps>();

export function BookmarkNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BookmarksList"
      screenOptions={{headerShown: false}}
      screenLayout={ScreenLayout}>
      <Stack.Screen name="BookmarksList" component={BookmarksListScreen} />
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
