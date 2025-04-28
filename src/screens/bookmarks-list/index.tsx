import {UserCard} from '@shared/ui/card';
import {useAppSelector} from '@shared/store';
import {IUser} from '@entities/user/types.ts';
import {selectUser} from '@entities/user/model/selectors.ts';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';
import {FlatList, Vibration, View} from 'react-native';
import {styles} from './style';
import {UIAddButton} from '@shared/ui/buttons';
import {NoBookmarksCreated} from '@shared/ui/no-data-components';
import {CreateBookmarkModal} from '@shared/ui/modals';

import {GetShareFrom} from '@features/share-from';
import {useGetAllBookmarksQuery} from '@entities/bookmark/api';
import {BookmarkInList} from '@features/bookmark';

export function BookmarksList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user: IUser = useAppSelector(selectUser);
  const {data: bookmarks, isLoading, refetch} = useGetAllBookmarksQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View style={styles.pageContainer}>
      <UserCard user={user} />
      <FlatList
        data={bookmarks}
        style={{flex: 1}}
        contentContainerStyle={styles.bookmarksContainer}
        renderItem={({item: bookmark}) => (
          <BookmarkInList bookmark={bookmark} />
        )}
        onRefresh={refetch}
        refreshing={isLoading}
        keyExtractor={item => item.id}
        ListEmptyComponent={() => (
          <View style={styles.noData}>
            <NoBookmarksCreated />
          </View>
        )}
      />

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
