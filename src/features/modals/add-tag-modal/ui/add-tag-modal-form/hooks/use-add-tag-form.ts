import {useForm} from 'react-hook-form';
import {IAddTagForm} from '../model/types';

export const useAddTagForm = () => {
  return useForm<IAddTagForm>({
    defaultValues: {
      tagName: '',
      tagDropdown: '',
    },
  });
};
