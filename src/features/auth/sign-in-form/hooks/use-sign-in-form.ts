import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ISignInFormInput} from '../model/types';
import {schema} from '../model/schema';

export const useSignInForm = () => {
  return useForm<ISignInFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });
};
