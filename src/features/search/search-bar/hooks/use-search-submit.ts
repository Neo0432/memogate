import {ISearchFormData} from '@features/search/search-bar/model/types';
import {Dispatch, SetStateAction} from 'react';
import {IBookmark} from '@entities/bookmark/types.ts';
import {getSearchMatchesBookmarks} from '../lib/get-search-matches-bookmarks';
import {ITagWithBookmarkLinks} from '@/entities/tag/types';
import {getSearchMatchesTags} from '../lib/get-search-matches-tags';

export const useSearchSubmit = ({
  bookmarks,
  tags,
  setSearchResult,
}: {
  bookmarks: IBookmark[];
  tags: ITagWithBookmarkLinks[];
  setSearchResult: Dispatch<SetStateAction<IBookmark[]>>;
}) => {
  return (data: ISearchFormData) => {
    const searchQuery = data.search.toLowerCase();

    if (!searchQuery && data.tags.length === 0) {
      setSearchResult([]);
      return;
    }

    if (data.tags.length > 0) {
      bookmarks = getSearchMatchesTags(tags, data.tags, bookmarks);
    }

    const {searchResult} = getSearchMatchesBookmarks(searchQuery, bookmarks);
    setSearchResult(searchResult);
  };
};
