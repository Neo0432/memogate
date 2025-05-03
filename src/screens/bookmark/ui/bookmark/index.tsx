import {ScrollView, View} from 'react-native';
import {PreviewWebsiteImage} from '@features/preview-url-image';
import {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {toggleBottomTabs} from '@shared/lib/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';
import {useFetchBookmarkByIdQuery} from '@entities/bookmark/api';
import {useSetHeaderTitle} from '@shared/hooks/use-set-header-title.ts';
import {BookmarkOpenedForm} from '@features/bookmark';

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

  useEffect(() => {
    refetch();
  }, [bookmarkId]);

  useSetHeaderTitle({
    title: bookmark?.title,
    navigation,
    placeholder: 'bookmark',
  });

  toggleBottomTabs(navigation);

  return (
    <View style={styles.container}>
      <PreviewWebsiteImage url={bookmark?.url} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <BookmarkOpenedForm
          bookmark={bookmark}
          isLoading={isLoading || isFetching}
        />
      </ScrollView>
    </View>
  );
}
