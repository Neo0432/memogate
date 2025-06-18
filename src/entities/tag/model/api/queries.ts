import {IAddTagDTO, IRemoveTagDTO} from '@entities/tag/types.ts';

export const getTagsForBookmarkQuery = (bookmarkId: string) => ({
  url: `/tags/bookmark`,
  method: 'GET',
  params: {bookmarkId},
});

export const addTagToBookmarkQuery = (tag: IAddTagDTO) => ({
  url: '/tags/add-tag',
  method: 'POST',
  body: {tagData: {name: tag.name}, bookmarkId: tag.bookmarkId},
});

export const removeTagFromBookmarkQuery = ({
  tagId,
  bookmarkId,
}: IRemoveTagDTO) => ({
  url: '/tags/delete',
  method: 'DELETE',
  body: {tagId, bookmarkId},
});
