import {styles} from './style';
import {
  Keyboard,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import {SearchBar} from '@screens/search/ui/search-bar';
import {IUser} from '@entities/user/types.ts';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {
  selectUser,
  selectUserBookmarks,
} from '@entities/user/model/selectors.ts';
import {IBookmark} from '@entities/bookmark/types.ts';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {
  deleteBookmark,
  fetchUserBookmarks,
} from '@entities/bookmark/model/actions.ts';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {BookmarkCard} from '@shared/ui/card';
import {SearchStackNavigatorProps} from '@app/navigation/auth-nav/search-stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function SearchScreen() {
  const user: IUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const bookmarks: IBookmark[] = useAppSelector(selectUserBookmarks);
  const [searchResult, setSearchResult] = useState<IBookmark[]>([]);
  const panGesture = Gesture.Pan();
  const navigation =
    useNavigation<NativeStackNavigationProp<SearchStackNavigatorProps>>();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUserBookmarks(user.id));
    }, [dispatch]),
  );

  return (
    <View style={styles.pageContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log('Press');
          Keyboard.dismiss;
        }}>
        <>
          <SearchBar bookmarks={bookmarks} setSearchResult={setSearchResult} />

          {searchResult.length > 0 && (
            <GestureDetector gesture={panGesture}>
              <ScrollView contentContainerStyle={styles.bookmarksContainer}>
                {searchResult.map(bookmark => (
                  <BookmarkCard
                    bookmark={bookmark}
                    onSwipe={() => {
                      Vibration.vibrate([0, 80, 20, 10]);
                      dispatch(deleteBookmark(bookmark.id));
                    }}
                    onPress={() => {
                      Vibration.vibrate([1, 10, 80, 50]);
                      navigation.navigate('BookmarksCard', {
                        bookmarkId: bookmark.id,
                      });
                    }}
                    key={bookmark.id}
                  />
                ))}
              </ScrollView>
            </GestureDetector>
          )}
        </>
      </TouchableWithoutFeedback>
    </View>
  );
}
