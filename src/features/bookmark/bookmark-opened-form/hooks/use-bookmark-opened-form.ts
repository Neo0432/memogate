import {useForm} from 'react-hook-form';
import {IBookmarkOpenedFormData} from '@features/bookmark/bookmark-opened-form/model/types';
import {IBookmark} from '@entities/bookmark/types.ts';

export const useBookmarkOpenedForm = ({bookmark}: {bookmark?: IBookmark}) => {
  return useForm<IBookmarkOpenedFormData>({
    defaultValues: {
      title: bookmark?.title,
      description: bookmark?.description,
      url: bookmark?.url,
    },
  });
};
