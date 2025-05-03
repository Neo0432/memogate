import {useCreateBookmarkMutation} from '@entities/bookmark/api';
import {IBookmarkCreateDTO} from '@entities/bookmark/types.ts';
import {Vibration} from 'react-native';
import {CreateBookmarkFormData} from '../model/types';
import {useAppSelector} from '@shared/store';
import {selectUser} from '@entities/user/model/selectors.ts';
import {UseFormReset} from 'react-hook-form';
import {Dispatch, SetStateAction} from 'react';

export const useCreateBookmarkSubmit = ({
  reset,
  setIsModalOpen,
}: {
  reset: UseFormReset<any>;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [createBookmark] = useCreateBookmarkMutation();
  const user = useAppSelector(selectUser);

  return async (data: CreateBookmarkFormData) => {
    const createBookmarkData: IBookmarkCreateDTO = {...data, userId: user.id};
    createBookmark(createBookmarkData);

    reset();
    Vibration.vibrate([0, 5, 10, 100]);
    setIsModalOpen(false);
  };
};
