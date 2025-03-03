import {UserCard, BookmarkCard} from '@shared/ui/card';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {IUser} from '@entities/user/types.ts';
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
import {ScrollView, Vibration, View} from 'react-native';
import {styles} from './style';
import {UIAddButton} from '@shared/ui/buttons';
import {NoBookmarksCreated} from '@shared/ui/no-data-components';
import {CreateBookmarkModal} from '@shared/ui/modals';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';
import {GetShareFrom} from '@features/share-from';

export function BookmarksList() {
  const panGesture = Gesture.Pan();
  const navigation =
    useNavigation<NativeStackNavigationProp<BookmarkStackNavigatorProps>>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const user: IUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const bookmarks: IBookmark[] = useAppSelector(selectUserBookmarks);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchUserBookmarks(user.id));
    }, [dispatch]),
  );

  return (
    <View style={styles.pageContainer}>
      <UserCard user={user} />
      {bookmarks.length > 0 ? (
        <GestureDetector gesture={panGesture}>
          <ScrollView contentContainerStyle={styles.bookmarksContainer}>
            {bookmarks.map(bookmark => (
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
      ) : (
        <View style={styles.noData}>
          <NoBookmarksCreated />
        </View>
      )}
      <UIAddButton
        onPress={() => {
          Vibration.vibrate(10);
          setIsModalOpen(true);
        }}
      />

      {isModalOpen && <CreateBookmarkModal setIsModalOpen={setIsModalOpen} />}
      <GetShareFrom />
    </View>
  );
}
