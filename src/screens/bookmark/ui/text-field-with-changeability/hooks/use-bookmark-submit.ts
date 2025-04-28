import {IBookmark, IBookmarkUpdateDTO} from '@entities/bookmark/types.ts';
import {useUpdateBookmarkMutation} from '@entities/bookmark/api';
import {useEffect} from 'react';

export const useBookmarkSubmit = (bookmark?: IBookmark) => {
  const [updateData] = useUpdateBookmarkMutation();

  return async <K extends keyof IBookmarkUpdateDTO>(data: {
    field: K;
    data: IBookmarkUpdateDTO[K];
  }) => {
    if (!bookmark) return;
    const reqData: IBookmarkUpdateDTO = {
      id: bookmark.id,
      url: bookmark.url,
      title: bookmark.title,
      description: bookmark.description,
    };

    reqData[data.field] = data.data;

    updateData(reqData);
  };
};
