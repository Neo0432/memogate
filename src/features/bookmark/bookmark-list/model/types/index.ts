import {IBookmark} from '@entities/bookmark/types.ts';

export interface IBookmarkListProps {
  bookmarks: IBookmark[];
  isLoading: boolean;
  refetch: () => void;
}
