import {RootState} from '@shared/store';
import {createSelector} from '@reduxjs/toolkit';
import {IBookmarkState} from '@entities/bookmark/model/slice.ts';

export const selectCurrentBookmark = createSelector(
  [(state: RootState) => state.bookmark],
  (bookmark: IBookmarkState) => bookmark.currentBookmark,
);
