import {useCreateBookmarkForm} from '../../hooks/use-create-bookmark-form.ts';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Controller} from 'react-hook-form';
import {CustomTextInput} from '@shared/ui/text-inputs';
import {UIButtonWithLoading} from '@shared/ui/buttons';
import {useCreateBookmarkSubmit} from '../../hooks/use-create-bookmark-submit.ts';
import {Dispatch, SetStateAction} from 'react';

export function CreateBookmarkModalForm({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const methods = useCreateBookmarkForm();

  const {
    control,
    handleSubmit,
    formState: {isLoading, isValid},
    reset,
  } = methods;

  const onSubmit = useCreateBookmarkSubmit({reset, setIsModalOpen});

  return (
    <>
      <View style={styles.form}>
        <View>
          <Controller
            control={control}
            name="url"
            render={({field: {onChange, onBlur, value}}) => (
              <CustomTextInput
                renderTop={<Text style={styles.inputsLabel}>Url</Text>}
                label="Url"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                multiline={true}
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
                renderTop={<Text style={styles.inputsLabel}>Title</Text>}
                label="Title"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                multiline={true}
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
                renderTop={<Text style={styles.inputsLabel}>Description</Text>}
                label="Description"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                multiline={true}
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
    </>
  );
}
