import {IBookmark} from '@entities/bookmark/types.ts';

export const getSearchMatchesBookmarks = (
  searchQuery: string,
  bookmarks: IBookmark[],
) => {
  let searchResult: IBookmark[] = [];

  if (bookmarks && bookmarks?.length !== 0) {
    searchResult = bookmarks.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery);
      const descriptionMatch = item.description
        .toLowerCase()
        .includes(searchQuery);

      return titleMatch || descriptionMatch;
    });
  }

  return {searchResult};
};
