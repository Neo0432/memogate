import {styles} from './style';
import {FlatList, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {SearchBar} from '@screens/search/ui/search-bar';
import {IBookmark} from '@entities/bookmark/types.ts';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';

import {BookmarkInList} from '@features/bookmark';
import {useGetAllBookmarksQuery} from '@entities/bookmark/api';

export function SearchScreen() {
  const [searchResult, setSearchResult] = useState<IBookmark[]>([]);

  const {data: bookmarks, isLoading, refetch} = useGetAllBookmarksQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View style={styles.pageContainer}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss;
        }}>
        <>
          <SearchBar
            bookmarks={bookmarks || []}
            setSearchResult={setSearchResult}
          />
          {searchResult.length > 0 && (
            <FlatList
              data={searchResult}
              renderItem={({item: bookmark}) => (
                <BookmarkInList bookmark={bookmark} />
              )}
              keyExtractor={item => item.id}
              onRefresh={refetch}
              refreshing={isLoading}
              contentContainerStyle={styles.bookmarksContainer}></FlatList>
          )}
        </>
      </TouchableWithoutFeedback>
    </View>
  );
}
