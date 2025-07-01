import {Dispatch, SetStateAction} from 'react';
import {CreateBookmarkModalForm} from '@features/modals/create-bookmark-modal/ui/create-bookmark-modal-form';
import {ModalWithCrossButton} from '@widgets/modals';

export default function CreateBookmarkModal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ModalWithCrossButton
      onButtonPress={() => setIsModalOpen(false)}
      title={'New bookmark'}>
      <CreateBookmarkModalForm setIsModalOpen={setIsModalOpen} />
    </ModalWithCrossButton>
  );
}
