import {createStackNavigator} from '@react-navigation/stack';
import {IBookmark} from '@entities/bookmark/types.ts';
import {ScreenLayout} from '@app/navigation/layout';
import {BookmarksList} from '@screens/bookmarks-list';
import {BookmarkScreen} from '@screens/bookmark';
import {colors} from '@shared/ui/uikit';
import {BookmarkCardHeader} from '@app/navigation/ui/headers/bookmark-card-header';

export type BookmarkStackNavigatorProps = {
  BookmarksScreen: undefined;
  BookmarksCard: {bookmarkId: string};
};

const Stack = createStackNavigator<BookmarkStackNavigatorProps>();

export function BookmarkNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BookmarksScreen"
      screenOptions={{headerShown: false}}
      screenLayout={ScreenLayout}>
      <Stack.Screen name="BookmarksScreen" component={BookmarksList} />
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
