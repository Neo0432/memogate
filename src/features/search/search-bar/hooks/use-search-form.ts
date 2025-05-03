import {useForm} from 'react-hook-form';
import {ISearchFormData} from '../model/types';

export const useSearchForm = () => {
  return useForm<ISearchFormData>({defaultValues: {search: ''}});
};
