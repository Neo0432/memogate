import {
  Button,
  Keyboard,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Vibration,
  View,
} from 'react-native';
import {Portal} from '@gorhom/portal';
import {Dispatch, SetStateAction} from 'react';

import {styles} from './style';
import {CustomTextInput} from '@shared/ui/text-inputs';
import {Controller, useForm} from 'react-hook-form';
import {UIButtonWithLoading, UICloseButton} from '@shared/ui/buttons';
import {useDispatch} from 'react-redux';
import {createBookmark} from '@entities/bookmark/model/actions.ts';
import {selectUser} from '@entities/user/model/selectors.ts';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {IBookmarkCreateDTO} from '@entities/bookmark/types.ts';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function CreateBookmarkModal({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  interface FormData {
    title: string;
    description: string;
    url: string;
  }

  const methods = useForm<FormData>({
    defaultValues: {
      title: '',
      description: '',
      url: '',
    },
  });

  const {
    control,
    handleSubmit,
    formState: {isLoading, isValid},
    reset,
  } = methods;

  const onSubmit = async (data: FormData) => {
    const createBookmarkData: IBookmarkCreateDTO = {...data, userId: user.id};
    dispatch(createBookmark(createBookmarkData));

    reset();
    Vibration.vibrate([0, 5, 10, 100]);
    setIsModalOpen(false);
  };

  return (
    <Portal>
      <GestureHandlerRootView
        style={{flex: 1, position: 'absolute', backgroundColor: 'white'}}>
        <Modal transparent statusBarTranslucent>
          <View style={styles.container}>
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
                <View style={styles.form}>
                  <View>
                    <Controller
                      control={control}
                      name="url"
                      render={({field: {onChange, onBlur, value}}) => (
                        <CustomTextInput
                          renderTop={
                            <Text style={styles.inputsLabel}>Url</Text>
                          }
                          label="Url"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder="Paste the url"
                        />
                      )}
                    />
                  </View>
                  <View>
                    <Controller
                      rules={{required: true}}
                      control={control}
                      name="title"
                      render={({field: {onChange, onBlur, value}}) => (
                        <CustomTextInput
                          renderTop={
                            <Text style={styles.inputsLabel}>Title</Text>
                          }
                          label="Title"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder="Enter title of bookmark"
                        />
                      )}
                    />
                  </View>
                  <View>
                    <Controller
                      control={control}
                      name="description"
                      render={({field: {onChange, onBlur, value}}) => (
                        <CustomTextInput
                          renderTop={
                            <Text style={styles.inputsLabel}>Description</Text>
                          }
                          label="Description"
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                          placeholder="Enter description"
                        />
                      )}
                    />
                  </View>
                </View>
                <UIButtonWithLoading
                  colorVariant="primary"
                  size="large"
                  isLoading={isLoading}
                  disabled={!isValid}
                  style={{width: '100%'}}
                  onPress={handleSubmit(onSubmit)}>
                  <Text style={styles.submitButtonText}>Create a bookmark</Text>
                </UIButtonWithLoading>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </GestureHandlerRootView>
    </Portal>
  );
}
