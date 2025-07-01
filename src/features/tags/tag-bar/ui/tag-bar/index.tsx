import {View} from 'react-native';
import {
  useGetTagsForBookmarkQuery,
  useRemoveTagFromBookmarkMutation,
} from '@entities/tag/model/api';
import {UISmallRoundedAddButton} from '@shared/ui/buttons';
import {TagBarList} from '../tag-list';
import {styles} from './style';
import {TagSkeletonLoading} from '@features/tags/tag-bar/ui/skeleton-loading';

export function TagBar({
  bookmarkId,
  onAdd,
}: {
  onAdd: () => void;
  bookmarkId?: string;
}) {
  const {
    data: tags,
    isFetching,
    isLoading,
  } = useGetTagsForBookmarkQuery(bookmarkId || '');

  const [removeTagById] = useRemoveTagFromBookmarkMutation();

  return (
    <View style={styles.container}>
      <TagSkeletonLoading isLoading={isFetching || isLoading}>
        <TagBarList
          tags={
            tags || [
              {id: '1', name: 'TestTag'},
              {id: '2', name: 'Youtube'},
              {id: '3', name: 'Youtube'},
              {id: '4', name: 'Youtube'},
            ]
          }
          onRemove={removeTagById}
          bookmarkId={bookmarkId}
        />
        <UISmallRoundedAddButton style={{position: 'static'}} onPress={onAdd} />
      </TagSkeletonLoading>
    </View>
  );
}
