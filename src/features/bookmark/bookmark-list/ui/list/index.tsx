import {styles} from './style';
import {BookmarkListItem} from '@features/bookmark';
import {FlatList, View} from 'react-native';
import {NoBookmarksCreated} from '@shared/ui/no-data-components';
import {useGetAllBookmarksQuery} from '@entities/bookmark/api';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

export function BookmarksList() {
  const {data: bookmarks, isLoading, refetch} = useGetAllBookmarksQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <FlatList
      data={bookmarks}
      style={{flex: 1}}
      contentContainerStyle={styles.bookmarksContainer}
      renderItem={({item: bookmark}) => (
        <BookmarkListItem bookmark={bookmark} />
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
  );
}
