import {createSlice} from '@reduxjs/toolkit';
import {IUserState} from '../types';
import {signUpUser, signInUser} from './actions';

const initialState: IUserState = {
  user: {
    createdAt: '',
    id: '0',
    email: '',
    name: '',
    password: '',
  },
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
