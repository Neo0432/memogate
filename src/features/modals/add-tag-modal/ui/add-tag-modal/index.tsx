import {ModalWithCrossButton} from '@widgets/modals';
import {Dispatch, SetStateAction} from 'react';
import {AddTagModalForm} from '../add-tag-modal-form';

export function AddTagModal({
  isOpen,
  setIsOpen,
  bookmarkId,
  onModalClose,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bookmarkId: string;
  onModalClose?: () => void;
}) {
  return (
    <>
      {isOpen && (
        <ModalWithCrossButton
          onButtonPress={() => setIsOpen(false)}
          title={'Add tag'}>
          <AddTagModalForm
            bookmarkId={bookmarkId}
            onModalClose={onModalClose}
          />
        </ModalWithCrossButton>
      )}
    </>
  );
}
