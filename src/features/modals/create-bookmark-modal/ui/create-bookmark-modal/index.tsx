import {
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import {Dispatch, SetStateAction} from 'react';

import {styles} from './style';
import {UICloseButton} from '@shared/ui/buttons';
import {ModalBase} from '@shared/ui/modals';
import {CreateBookmarkModalForm} from '@features/modals/create-bookmark-modal/ui/create-bookmark-modal-form';

export default function CreateBookmarkModal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ModalBase>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.substrate}>
          <UICloseButton
            size="small"
            colorVariant="secondary"
            onPress={() => {
              Vibration.vibrate([0, 10, 20, 80]);
              setIsModalOpen(false);
            }}
            style={styles.closeButton}
          />
          <Text style={styles.titleOfModal}>New bookmark</Text>
          <CreateBookmarkModalForm setIsModalOpen={setIsModalOpen} />
        </View>
      </TouchableWithoutFeedback>
    </ModalBase>
  );
}
