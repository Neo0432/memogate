import {TextInput, View} from 'react-native';
import {styles} from './style';
import {UIRoundedButton} from '@shared/ui/buttons';
import {Controller, useForm} from 'react-hook-form';
import {IBookmark} from '@entities/bookmark/types.ts';
import SearchIcon from '@shared/assets/icons/buttons/search-button/search-icon.svg';
import {colors} from '@shared/ui/uikit';
import {Dispatch, SetStateAction} from 'react';

interface IFormData {
  search: string;
}

export function SearchBar({
  bookmarks,
  setSearchResult,
}: {
  bookmarks: IBookmark[];
  setSearchResult: Dispatch<SetStateAction<IBookmark[]>>;
}) {
  const methods = useForm<IFormData>({defaultValues: {search: ''}});
  const {control, handleSubmit} = methods;

  const onSubmit = (data: IFormData) => {
    const searchQuery = data.search.toLowerCase();
    if (!searchQuery) {
      setSearchResult([]);
      return;
    }
    if (bookmarks.length === 0) return;
    const result = bookmarks.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchQuery);
      const descriptionMatch = item.description
        .toLowerCase()
        .includes(searchQuery);
      console.log('searchQuery');

      return titleMatch || descriptionMatch;
    });

    setSearchResult(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchField}>
        <Controller
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
          control={control}
        />
      </View>
      <UIRoundedButton
        size="small"
        colorVariant="secondary"
        style={styles.searchButton}
        customPressedStyle={styles.customPressed}
        onPress={handleSubmit(onSubmit)}>
        <SearchIcon width={18} height={18} />
      </UIRoundedButton>
    </View>
  );
}
