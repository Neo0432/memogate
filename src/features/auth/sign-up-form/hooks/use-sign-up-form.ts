import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ISignUpFormInput} from '../model/types';
import {scheme} from '../model/scheme';

export const useSignUpForm = () => {
  return useForm<ISignUpFormInput>({
    resolver: yupResolver(scheme),
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
