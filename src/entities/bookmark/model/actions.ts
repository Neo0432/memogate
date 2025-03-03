import {createAsyncThunk} from '@reduxjs/toolkit';
import {privateClient} from '@shared/api/clients.ts';
import {isAxiosError} from 'axios';
import {
  IBookmarkCreateDTO,
  IBookmarkUpdateDTO,
} from '@entities/bookmark/types.ts';

export const fetchUserBookmarks = createAsyncThunk(
  'bookmarks/fetchByUserId',
  async (userId: string, {rejectWithValue}) => {
    try {
      const response = await privateClient.get('/bookmarks', {
        params: {userId},
      });

      return response.data.bookmarks;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(
          `[ERROR] Cant get user bookmarks for user ${userId}: ${e.message}`,
        );
      }

      return rejectWithValue(e);
    }
  },
);

export const fetchBookmarkById = createAsyncThunk(
  'bookmarks/fetchById',
  async (bookmarkId: string, {rejectWithValue}) => {
    try {
      const response = await privateClient.get(`/bookmarks/${bookmarkId}`, {
        params: {bookmarkId},
      });

      return response.data.bookmark;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant fetch bookmark by id: ${e.message}`);
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

export const updateBookmark = createAsyncThunk(
  'bookmarks/update',
  async (bookmark: IBookmarkUpdateDTO, {rejectWithValue}) => {
    console.log(bookmark);
    try {
      const response = await privateClient.patch('/bookmarks/update', {
        bookmark,
      });

      console.log(response.data.bookmark);

      return response.data.bookmark;
    } catch (e) {
      if (isAxiosError(e)) {
        console.log(`[ERROR] Cant update bookmark: ${e.message}`);
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
