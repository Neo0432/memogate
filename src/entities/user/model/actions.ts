import {createAsyncThunk} from '@reduxjs/toolkit';
import {authClient} from '@shared/api/clients.ts';
import {isAxiosError} from 'axios';
import {IUserSighUpDTO, IUserSignInDTO} from '@entities/user/types.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const signUpUser = createAsyncThunk(
  'users/signUpUser',
  async (userData: IUserSighUpDTO, {rejectWithValue}) => {
    try {
      console.log(userData);
      const response = await authClient.post('/auth/register', userData);
      console.log(response.data);
      await AsyncStorage.setItem('user_token', response?.data.token);
      return response.data.data;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant create user: ${e.message}`);
        console.log(e.config);
      }
      return rejectWithValue(e);
    }
  },
);

export const signInUser = createAsyncThunk(
  'users/signInUser',
  async (userData: IUserSignInDTO, {rejectWithValue}) => {
    console.log(userData);
    try {
      const response = await authClient.post('/auth/signin', userData);
      console.log(response.data);
      await AsyncStorage.setItem('user_token', response?.data.token);

      return response.data.data;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant auth user: ${e.message}`);
        console.log(e.response);
      }
      return rejectWithValue(e);
    }
  },
);
