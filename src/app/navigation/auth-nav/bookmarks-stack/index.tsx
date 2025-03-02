import {createStackNavigator} from '@react-navigation/stack';
import {IBookmark} from '@entities/bookmark/types.ts';
import {ScreenLayout} from '@app/navigation/layout';
import {BookmarksList} from '@screens/bookmarks-list';

export type BookmarkStackNavigatorProps = {
  BookmarksScreen: undefined;
  BookmarksCard: {bookmark: IBookmark};
};

const Stack = createStackNavigator<BookmarkStackNavigatorProps>();

export function BookmarkNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="BookmarksScreen"
      screenOptions={{headerShown: false}}
      screenLayout={ScreenLayout}>
      <Stack.Screen name="BookmarksScreen" component={BookmarksList} />
      <Stack.Screen name="BookmarksCard" component={() => <></>} />
    </Stack.Navigator>
  );
}
