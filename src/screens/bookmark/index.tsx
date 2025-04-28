import {ScrollView, View} from 'react-native';
import {PreviewWebsiteImage} from '@features/preview-url-image';
import {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TextFieldWithChangeability} from '@screens/bookmark/ui/text-field-with-changeability';
import {styles} from './style';
import {toggleBottomTabs} from '@shared/lib/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';
import {cropTitle} from './lib/crop-title.ts';
import {
  useFetchBookmarkByIdQuery,
  useUpdateBookmarkMutation,
} from '@entities/bookmark/api';
import {useBookmarkSubmit} from '@screens/bookmark/ui/text-field-with-changeability/hooks/use-bookmark-submit.ts';

export function BookmarkScreen(): JSX.Element {
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<BookmarkStackNavigatorProps>>();

  const {bookmarkId} = route.params as {bookmarkId: string};

  const {
    data: bookmark,
    isLoading,
    isFetching,
    refetch,
  } = useFetchBookmarkByIdQuery(bookmarkId);

  const onSubmit = useBookmarkSubmit(bookmark);

  useEffect(() => {
    if (bookmark)
      navigation.setOptions({title: cropTitle(bookmark.title) || 'bookmark'});
  }, [bookmark, navigation]);

  toggleBottomTabs(navigation);

  useEffect(() => {
    refetch();
  }, [bookmarkId]);

  return (
    <View style={styles.container}>
      <PreviewWebsiteImage url={bookmark?.url} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <TextFieldWithChangeability
          itemName="url"
          value={bookmark?.url}
          onSubmit={onSubmit}
          isLoading={isLoading || isFetching}
        />
        <TextFieldWithChangeability
          itemName="title"
          value={bookmark?.title}
          onSubmit={onSubmit}
          isLoading={isLoading || isFetching}
        />
        <TextFieldWithChangeability
          itemName="description"
          value={bookmark?.description}
          onSubmit={onSubmit}
          isLoading={isLoading || isFetching}
        />
      </ScrollView>
    </View>
  );
}
