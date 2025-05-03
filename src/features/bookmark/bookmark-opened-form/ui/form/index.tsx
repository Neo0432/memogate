import {useBookmarkSubmit} from '../../hooks/use-bookmark-submit.ts';
import {IBookmark} from '@entities/bookmark/types.ts';
import {Controller} from 'react-hook-form';
import {TextFieldWithChangeability} from '@widgets/inputs';
import {useBookmarkOpenedForm} from '../../hooks/use-bookmark-opened-form.ts';

export function BookmarkOpenedForm({
  bookmark,
  isLoading,
}: {
  bookmark: IBookmark | undefined;
  isLoading?: boolean;
}) {
  const methods = useBookmarkOpenedForm({bookmark});

  const {control, handleSubmit} = methods;

  const onSubmit = useBookmarkSubmit({bookmark, handleSubmit});

  return (
    <>
      <Controller
        control={control}
        render={({field}) => (
          <TextFieldWithChangeability
            itemName="url"
            {...field}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        )}
        name="url"
      />
      <Controller
        control={control}
        render={({field}) => (
          <TextFieldWithChangeability
            itemName="title"
            {...field}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        )}
        name="title"
      />
      <Controller
        control={control}
        render={({field}) => (
          <TextFieldWithChangeability
            itemName="description"
            {...field}
            onSubmit={onSubmit}
            isLoading={isLoading}
          />
        )}
        name="description"
      />
    </>
  );
}
