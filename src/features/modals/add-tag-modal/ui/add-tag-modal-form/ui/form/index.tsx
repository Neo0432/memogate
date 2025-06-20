import {Controller} from 'react-hook-form';
import {useAddTagForm} from '../../hooks/use-add-tag-form.ts';
import {UIDropdownInputField} from '@shared/ui/dropdown';
import {useGetAllTagsQuery} from '@entities/tag/model/api';
import {UIOutlinedTextInput} from '@shared/ui/text-inputs';
import {UIButtonWithText} from '@shared/ui/buttons';
import {styles} from './style';
import {useAddTagSubmit} from '../../hooks/use-add-tag-submit.ts';
import {DropdownDataList} from '../../model/types';
import {useEffect} from 'react';

export function AddTagModalForm({
  bookmarkId,
  onModalClose,
}: {
  bookmarkId: string;
  onModalClose?: () => void;
}) {
  const methods = useAddTagForm();
  const {
    control,
    handleSubmit,
    formState: {isLoading, isSubmitting, isSubmitted, isDirty},
    watch,
  } = methods;
  const tagDropdownValue = watch('tagDropdown');
  const tagNameValue = watch('tagName');

  const {data} = useGetAllTagsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const tagsList: DropdownDataList = [{label: 'Nothing', value: ''}].concat(
    data?.map(tag => ({
      label: tag.name,
      value: tag.id,
    })) || [],
  );

  useEffect(() => {
    if (isSubmitted) onModalClose?.();
  }, [isSubmitted]);

  const onSubmit = useAddTagSubmit(data || [], bookmarkId);

  return (
    <>
      <Controller
        control={control}
        render={({field: {value, onChange}}) => (
          <>
            <UIDropdownInputField
              value={value}
              data={tagsList}
              disabled={!!tagNameValue}
              onChange={onChange}
            />
          </>
        )}
        name="tagDropdown"
      />

      <Controller
        control={control}
        render={({field}) => (
          <UIOutlinedTextInput
            {...field}
            disabled={!!tagDropdownValue}
            onChangeText={field.onChange}
            placeholder="Name new tag"
          />
        )}
        name="tagName"
      />
      <UIButtonWithText
        colorVariant="primary"
        onPress={handleSubmit(onSubmit)}
        size="large"
        style={styles.button}
        buttonTextStyle={styles.buttonTextStyle}
        isLoading={isLoading || isSubmitting}
        disabled={!isDirty}>
        Create tag
      </UIButtonWithText>
    </>
  );
}
