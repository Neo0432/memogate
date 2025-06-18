import {ScrollView, View} from 'react-native';
import {PreviewWebsiteImage} from '@features/preview-url-image';
import {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './style';
import {toggleBottomTabs} from '@shared/lib/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';
import {useFetchBookmarkByIdQuery} from '@entities/bookmark/api';
import {useSetHeaderTitle} from '@shared/hooks/use-set-header-title.ts';
import {BookmarkOpenedForm} from '@features/bookmark';
import {TagBar} from '@features/tags';
import {AddTagModal} from '@features/modals/add-tag-modal';

export function BookmarkScreen() {
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<BookmarkStackNavigatorProps>>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

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
        <TagBar
          bookmarkId={bookmark?.id}
          onAdd={() => {
            setModalOpen(true);
          }}
        />
      </ScrollView>

      <AddTagModal
        isOpen={isModalOpen}
        setIsOpen={setModalOpen}
        bookmarkId={bookmarkId}
        onModalClose={() => setModalOpen(false)}
      />
    </View>
  );
}
