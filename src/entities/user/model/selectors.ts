import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@/shared/store';
import {IUserState} from '../types';

export const selectUserState = createSelector(
  [(state: RootState) => state.user],

  (userState: IUserState) => ({...userState}),
);

export const selectUser = createSelector(
  [selectUserState],
  (userState: IUserState) => userState.user,
);

export const selectIsLoggedIn = createSelector(
  [selectUserState],
  (userState: IUserState) => userState.isLoggedIn,
);
