import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@/shared/store';
import {IUserState} from '../types';

export const selectUser = createSelector(
  [(state: RootState) => state.user],

  (userState: IUserState) => ({...userState}),
);

export const selectIsLoggedIn = createSelector(
  [selectUser],
  (userState: IUserState) => userState.isLoggedIn,
);
