import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ISignUpFormInput} from '../model/types';
import {schema} from '../model/schema';

export const useSignUpForm = () => {
  return useForm<ISignUpFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
};
