import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from '../types';
import {signUpUser, signInUser} from './actions';
import {IBookmark} from '@entities/bookmark/types.ts';
import {
  createBookmark,
  deleteBookmark,
  fetchUserBookmarks,
  updateBookmark,
} from '@entities/bookmark/model/actions.ts';

const initialState: IUserState = {
  user: {
    createdAt: '',
    id: '0',
    email: '',
    name: '',
    password: '',
  },
  bookmarks: [] as IBookmark[],
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.user = initialState.user;
      state.isLoggedIn = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(fetchUserBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload;
      })
      .addCase(createBookmark.fulfilled, (state, action) => {
        state.bookmarks.push(action.payload);
      })
      .addCase(updateBookmark.fulfilled, (state, action) => {
        const index = state.bookmarks.findIndex(
          bookmark => bookmark.id === action.payload.id,
        );

        if (index !== -1) {
          console.log(index);
          state.bookmarks[index] = action.payload;
        }
      })
      .addCase(deleteBookmark.fulfilled, (state, action) => {
        state.bookmarks = state.bookmarks.filter(
          item => item.id !== action.payload,
        );
      });
  },
});

export const {logOut} = userSlice.actions;
export default userSlice.reducer;
