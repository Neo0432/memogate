import {useAppDispatch} from '@shared/store';
import {signUpUser} from '@entities/user/model/actions.ts';
import {SubmitHandler} from 'react-hook-form';
import {ISignUpFormInput} from '../model/types';

export const useSignUpSubmit = (): SubmitHandler<ISignUpFormInput> => {
  const dispatch = useAppDispatch();

  return data => {
    dispatch(
      signUpUser({name: data.name, email: data.email, password: data.password}),
    );
  };
};
