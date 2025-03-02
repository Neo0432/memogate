import {createAsyncThunk} from '@reduxjs/toolkit';
import {privateClient} from '@shared/api/clients.ts';
import {isAxiosError} from 'axios';
import {IBookmarkCreateDTO} from '@entities/bookmark/types.ts';

export const fetchUserBookmarks = createAsyncThunk(
  'bookmarks/fetchByUserId',
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await privateClient.get('/bookmarks', {
        params: {userId: userId},
      });

      return response.data.bookmarks;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(
          `[ERROR] Cant get user bookmarks for user ${userId}: ${e.response?.data.message}`,
        );
      }

      return rejectWithValue(e);
    }
  },
);

export const createBookmark = createAsyncThunk(
  'bookmarks/create',
  async (bookmark: IBookmarkCreateDTO, {rejectWithValue}) => {
    try {
      const response = await privateClient.post('/bookmarks/create', {
        bookmarkData: bookmark,
      });

      return response.data.bookmark;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant create bookmark: ${e.message}`);
        console.log(e.response);
      }

      return rejectWithValue(e);
    }
  },
);

export const deleteBookmark = createAsyncThunk(
  'bookmarks/delete',
  async (bookmarkId: string, {rejectWithValue}) => {
    try {
      const response = await privateClient.delete('/bookmarks/delete', {
        params: {bookmarkId: bookmarkId},
      });

      return response.data.bookmarkId;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant delete bookmark: ${e.message}`);
      }
      return rejectWithValue(e);
    }
  },
);
