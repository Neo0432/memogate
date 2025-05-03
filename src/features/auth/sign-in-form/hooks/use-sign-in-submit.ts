import {useAppDispatch} from '@shared/store';
import {SubmitHandler} from 'react-hook-form';
import {signInUser} from '@entities/user/model/actions.ts';
import {ISignInFormInput} from '../model/types';

export const useSignInSubmit = (): SubmitHandler<ISignInFormInput> => {
  const dispatch = useAppDispatch();

  return data => {
    dispatch(signInUser(data));
  };
};
