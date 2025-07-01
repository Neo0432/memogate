import {TextInput, View} from 'react-native';
import {styles} from './style';
import {Controller} from 'react-hook-form';
import {IBookmark} from '@entities/bookmark/types.ts';
import {colors} from '@shared/styles';
import {Dispatch, SetStateAction} from 'react';
import {useSearchForm} from '../../hooks/use-search-form.ts';
import {useSearchSubmit} from '@features/search/search-bar/hooks/use-search-submit.ts';
import {SearchButton} from '@features/search/search-bar/ui/search-button';
import {DropdownMultiSelect} from '@/shared/ui/dropdown/index.ts';
import {ITagWithBookmarkLinks} from '@/entities/tag/types.ts';
import {UISelectedDropdownItemWithIcon} from '@/shared/ui/dropdown-items/index.ts';

export function SearchBar({
  bookmarks,
  tags,
  setSearchResult,
}: {
  bookmarks: IBookmark[];
  tags: ITagWithBookmarkLinks[];
  setSearchResult: Dispatch<SetStateAction<IBookmark[]>>;
}) {
  const methods = useSearchForm();
  const {control, handleSubmit} = methods;

  const onSubmit = useSearchSubmit({bookmarks, tags, setSearchResult});

  return (
    <View style={styles.searchAreaContainer}>
      <View style={styles.container}>
        <View style={styles.searchField}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                onSubmitEditing={handleSubmit(onSubmit)}
                placeholderTextColor={colors.grayscale.color600}
                style={styles.searchTextInput}
                placeholder="Search something"
              />
            )}
            name="search"
          />
        </View>
        <SearchButton onSubmit={handleSubmit(onSubmit)} />
      </View>
      <Controller
        control={control}
        render={({field}) => (
          <DropdownMultiSelect
            {...field}
            data={(tags ?? []).map(tag => ({
              label: tag.name,
              value: tag.id,
            }))}
            placeholder="tag"
            style={{width: 64}}
            onBlur={() => {
              field.onBlur();
              handleSubmit(onSubmit)();
            }}
            renderItem={(item, selected) => (
              <UISelectedDropdownItemWithIcon
                item={item}
                selected={selected}
                icon="rounded-check"
              />
            )}
            maxHeight={264}
          />
        )}
        name="tags"
      />
    </View>
  );
}
