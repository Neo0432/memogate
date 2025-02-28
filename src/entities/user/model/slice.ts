import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUserState} from '../types';
import {signUpUser, signInUser} from './actions';
import {IBookmark} from '@entities/bookmark/types.ts';

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
      });
  },
});

export const {logOut} = userSlice.actions;
export default userSlice.reducer;
