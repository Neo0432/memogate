import {useForm} from 'react-hook-form';
import {CreateBookmarkFormData} from '../model/types';

export const useCreateBookmarkForm = () => {
  return useForm<CreateBookmarkFormData>({
    defaultValues: {
      title: '',
      description: '',
      url: '',
    },
  });
};
