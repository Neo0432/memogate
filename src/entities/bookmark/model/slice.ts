import {IBookmark} from '@entities/bookmark/types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {
  fetchBookmarkById,
  updateBookmark,
} from '@entities/bookmark/model/actions.ts';

export interface IBookmarkState {
  currentBookmark: IBookmark;
}

const initialState: IBookmarkState = {
  currentBookmark: {
    id: '',
    title: '',
    description: '',
    url: '',
    userId: '',
    createdAt: '',
  },
};

const bookmarkSlice = createSlice({
  name: 'bookmarkSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBookmarkById.fulfilled, (state, action) => {
        state.currentBookmark = action.payload;
      })
      .addCase(updateBookmark.fulfilled, (state, action) => {
        state.currentBookmark = action.payload;
      });
  },
});

export default bookmarkSlice.reducer;
