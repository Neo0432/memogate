import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    const token = await AsyncStorage.getItem('user_token');

    if (token) {
      console.log(token);
      if (typeof args === 'string') {
        args = {url: args};
      }

      args.headers = {
        ...(args.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }
  } catch (error) {
    console.error('[ERROR] Failed to attach token:', error);
  }

  return baseQuery(args, api, extraOptions);
};
