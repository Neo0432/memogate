import {styles} from './style';
import {FlatList, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {SearchBar} from '@features/search';
import {IBookmark} from '@entities/bookmark/types.ts';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useState} from 'react';

import {BookmarkListItem} from '@features/bookmark';
import {useGetAllBookmarksQuery} from '@entities/bookmark/api';
import {DropdownMultiSelect} from '@/shared/ui/dropdown';
import {useGetAllTagsQuery} from '@/entities/tag/model/api';
import {ITag} from '@entities/tag/types';

export function SearchScreen() {
  const [searchResult, setSearchResult] = useState<IBookmark[]>([]);

  const {data: bookmarks, isLoading, refetch} = useGetAllBookmarksQuery();
  const {data: tags, refetch: refetchTags} = useGetAllTagsQuery();

  useFocusEffect(
    useCallback(() => {
      refetch();
      refetchTags();
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
            tags={tags || []}
            setSearchResult={setSearchResult}
          />

          {searchResult.length > 0 && (
            <FlatList
              data={searchResult}
              renderItem={({item: bookmark}) => (
                <BookmarkListItem bookmark={bookmark} />
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
