import {ScrollView, View} from 'react-native';
import {PreviewWebsiteImage} from '@features/preview-url-image';
import {IBookmarkUpdateDTO} from '@entities/bookmark/types.ts';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectCurrentBookmark} from '@entities/bookmark/model/selectors.ts';
import {
  fetchBookmarkById,
  updateBookmark,
} from '@entities/bookmark/model/actions.ts';
import {TextFieldWithChangeability} from '@screens/bookmark/ui/text-field-with-changeability';
import {styles} from './style';
import {toggleBottomTabs} from '@shared/lib/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';

export function BookmarkScreen(): JSX.Element {
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<BookmarkStackNavigatorProps>>();

  const {bookmarkId} = route.params as {bookmarkId: string};

  const dispatch = useAppDispatch();
  const bookmark = useAppSelector(selectCurrentBookmark);

  const cropTitle = (title: string) => {
    if (title.length >= 23) {
      return title.substring(0, 20) + '...';
    }
    return title;
  };

  useEffect(() => {
    navigation.setOptions({title: cropTitle(bookmark.title) || 'bookmark'});
  }, [bookmark, navigation]);

  toggleBottomTabs(navigation);

  useEffect(() => {
    dispatch(fetchBookmarkById(bookmarkId));
  }, [dispatch, bookmarkId]);

  const onSubmit = async <K extends keyof IBookmarkUpdateDTO>(data: {
    field: K;
    data: IBookmarkUpdateDTO[K];
  }) => {
    const reqData: IBookmarkUpdateDTO = {
      id: bookmark.id,
      url: bookmark.url,
      title: bookmark.title,
      description: bookmark.description,
    };

    reqData[data.field] = data.data;

    dispatch(updateBookmark(reqData));
  };

  return (
    <View style={styles.container}>
      <PreviewWebsiteImage url={bookmark ? bookmark.url : ''} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextFieldWithChangeability
          itemName="url"
          value={bookmark.url}
          onSubmit={onSubmit}
        />
        <TextFieldWithChangeability
          itemName="title"
          value={bookmark.title}
          onSubmit={onSubmit}
        />
        <TextFieldWithChangeability
          itemName="description"
          value={bookmark.description}
          onSubmit={onSubmit}
        />
      </ScrollView>
    </View>
  );
}
