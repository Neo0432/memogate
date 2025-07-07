import {IBookmark} from '@entities/bookmark/types';
import {ITagWithBookmarkLinks} from '@entities/tag/types';

export const getSearchMatchesTags = (
  tags: ITagWithBookmarkLinks[],
  selectedTags: string[],
  bookmarks: IBookmark[],
): IBookmark[] => {
  const filteredTags = tags.filter(tag => selectedTags.includes(tag.id));

  const tagBookmarkIds = new Set<string>(
    filteredTags.flatMap(tag => tag.bookmarkIds ?? []),
  );

  return bookmarks.filter(bookmark => tagBookmarkIds.has(bookmark.id));
};
