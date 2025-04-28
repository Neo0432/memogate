import {
  IBookmarkCreateDTO,
  IBookmarkUpdateDTO,
} from '@entities/bookmark/types.ts';

export const createBookmarkQuery = (newBookmark: IBookmarkCreateDTO) => ({
  url: '/bookmarks/create',
  method: 'POST',
  body: {bookmarkData: newBookmark},
});

export const updateBookmarkQuery = (bookmark: IBookmarkUpdateDTO) => ({
  url: `/bookmarks/update?bookmarkId=${bookmark.id}`,
  method: 'PATCH',
  body: {bookmark},
});

export const deleteBookmarkMutation = (id: string) => ({
  url: '/bookmarks/delete',
  method: 'DELETE',
  params: {bookmarkId: id},
});

export const fetchBookmarkByIdQuery = (id: string) => ({
  url: `/bookmarks/bookmark`,
  method: 'GET',
  params: {bookmarkId: id},
});
