import {createApi} from '@reduxjs/toolkit/query/react';
import {
  IBookmark,
  IBookmarkCreateDTO,
  IBookmarkUpdateDTO,
} from '@entities/bookmark/types.ts';
import {baseQueryWithAuth} from './config.ts';
import {
  createBookmarkQuery,
  deleteBookmarkMutation,
  fetchBookmarkByIdQuery,
  updateBookmarkQuery,
} from './queries';

export const bookmarksApi = createApi({
  reducerPath: 'bookmarksApi',
  tagTypes: ['Bookmarks', 'SelectedBookmark'],
  refetchOnReconnect: true,
  baseQuery: baseQueryWithAuth,
  keepUnusedDataFor: 86400,

  endpoints: build => ({
    getAllBookmarks: build.query<IBookmark[], void>({
      query: () => `/bookmarks`,
      providesTags: ['Bookmarks'],

      transformResponse: (response: {bookmarks: IBookmark[] | []}, meta, arg) =>
        response.bookmarks,
    }),

    createBookmark: build.mutation<IBookmark, IBookmarkCreateDTO>({
      query: createBookmarkQuery,

      invalidatesTags: ['Bookmarks'],

      async onQueryStarted(newBookmark, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          bookmarksApi.util.updateQueryData(
            'getAllBookmarks',
            undefined,
            draft => {
              draft.push({
                id: 'temp-id',
                createdAt: new Date().toString(),
                ...newBookmark,
              });
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    deleteBookmark: build.mutation<string, string>({
      query: deleteBookmarkMutation,

      async onQueryStarted(bookmarkId, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          bookmarksApi.util.updateQueryData(
            'getAllBookmarks',
            undefined,
            draft => {
              const index = draft.findIndex(
                bookmark => bookmark.id === bookmarkId,
              );

              if (index !== -1) {
                draft.splice(index, 1);
              }
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),

    fetchBookmarkById: build.query<IBookmark, string>({
      query: fetchBookmarkByIdQuery,

      providesTags: ['SelectedBookmark'],
      transformResponse: (response: {
        bookmark: IBookmark | Promise<IBookmark>;
      }) => response.bookmark,
    }),

    updateBookmark: build.mutation<IBookmark, IBookmarkUpdateDTO>({
      query: updateBookmarkQuery,

      invalidatesTags: ['SelectedBookmark'],
      transformResponse: (response: {
        bookmark: IBookmark | Promise<IBookmark>;
      }) => response.bookmark,
    }),
  }),
});

export const {
  useGetAllBookmarksQuery,
  useCreateBookmarkMutation,
  useFetchBookmarkByIdQuery,
  useUpdateBookmarkMutation,
  useDeleteBookmarkMutation,
} = bookmarksApi;
