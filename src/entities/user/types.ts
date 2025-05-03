import {IBookmark} from '@entities/bookmark/types.ts';

export type IUser = {
  createdAt: string;
  id: string;
  name: string;
  email: string;
  password: string;
};

export interface IUserSignInDTO {
  email: string;
  password: string;
}

export interface IUserSighUpDTO extends IUserSignInDTO {
  name: string;
}

export interface IUserState {
  user: IUser;
  isLoggedIn: boolean;
}
