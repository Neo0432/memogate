import {IBookmark, IBookmarkUpdateDTO} from '@entities/bookmark/types.ts';
import {useUpdateBookmarkMutation} from '@entities/bookmark/api';
import {UseFormHandleSubmit} from 'react-hook-form';
import {IBookmarkOpenedFormData} from '../model/types';

export const useBookmarkSubmit = ({
  bookmark,
  handleSubmit,
}: {
  bookmark?: IBookmark;
  handleSubmit: UseFormHandleSubmit<IBookmarkOpenedFormData>;
}) => {
  const [updateData] = useUpdateBookmarkMutation();

  const submitFn = async (data: IBookmarkOpenedFormData) => {
    if (!data || !bookmark) return;

    const reqData: IBookmarkUpdateDTO = {
      id: bookmark.id,
      url: data.url,
      title: data.title,
      description: data.description,
    };

    updateData(reqData);
  };

  return handleSubmit(submitFn);
};
