import {createApi} from '@reduxjs/toolkit/query/react';
import {baseQueryWithAuth} from '@shared/api/config.ts';
import {
  IAddTagDTO,
  IAddTagResponseDto,
  IRemoveTagDTO,
  ITag,
  ITagWithBookmarkLinks,
} from '@entities/tag/types.ts';
import {
  addTagToBookmarkQuery,
  getTagsForBookmarkQuery,
  removeTagFromBookmarkQuery,
} from '@entities/tag/model/api/queries.ts';

export const tagsApi = createApi({
  reducerPath: 'tagsApi',
  refetchOnReconnect: true,
  tagTypes: ['Tags', 'BookmarkTags'],
  baseQuery: baseQueryWithAuth,

  endpoints: build => ({
    getAllTags: build.query<ITagWithBookmarkLinks[], void>({
      query: () => '/tags',

      providesTags: ['Tags'],
    }),

    getTagsForBookmark: build.query<ITag[], string>({
      query: getTagsForBookmarkQuery,

      providesTags: ['BookmarkTags'],
    }),

    addTagForBookmark: build.mutation<IAddTagResponseDto, IAddTagDTO>({
      query: addTagToBookmarkQuery,

      invalidatesTags: ['BookmarkTags', 'Tags'],

      async onQueryStarted(newTag, {dispatch, queryFulfilled}) {
        const patchedResult = dispatch(
          tagsApi.util.updateQueryData(
            'getTagsForBookmark',
            newTag.bookmarkId,
            draft => {
              draft.push({id: 'newTagID', name: newTag.name});
            },
          ),
        );

        try {
          await queryFulfilled;
        } catch {
          patchedResult.undo();
        }
      },
    }),

    removeTagFromBookmark: build.mutation<IRemoveTagDTO, IRemoveTagDTO>({
      query: removeTagFromBookmarkQuery,

      invalidatesTags: ['BookmarkTags', 'Tags'],

      async onQueryStarted(tagData, {dispatch, queryFulfilled}) {
        const patchResult = dispatch(
          tagsApi.util.updateQueryData(
            'getTagsForBookmark',
            tagData.bookmarkId,
            draft => {
              const index = draft.findIndex(link => link.id === tagData.tagId);

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
  }),
});

export const {
  useGetAllTagsQuery,
  useGetTagsForBookmarkQuery,
  useAddTagForBookmarkMutation,
  useRemoveTagFromBookmarkMutation,
} = tagsApi;
