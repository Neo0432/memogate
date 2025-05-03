import {ISearchFormData} from '@features/search/search-bar/model/types';
import {Dispatch, SetStateAction} from 'react';
import {IBookmark} from '@entities/bookmark/types.ts';
import {getSearchMatchesBookmarks} from '../lib/get-search-matches-bookmarks';

export const useSearchSubmit = ({
  bookmarks,
  setSearchResult,
}: {
  bookmarks: IBookmark[];
  setSearchResult: Dispatch<SetStateAction<IBookmark[]>>;
}) => {
  return (data: ISearchFormData) => {
    const searchQuery = data.search.toLowerCase();

    if (!searchQuery) {
      setSearchResult([]);
      return;
    }

    const {searchResult} = getSearchMatchesBookmarks(searchQuery, bookmarks);
    setSearchResult(searchResult);
  };
};
