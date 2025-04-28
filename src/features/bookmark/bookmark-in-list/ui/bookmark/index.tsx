import {BookmarkCard} from '@shared/ui/card';
import {IBookmark} from '@entities/bookmark/types.ts';
import {useBookmarkPress} from '@features/bookmark/bookmark-in-list/hooks/use-bookmark-press.ts';
import {useBookmarkSwipe} from '@features/bookmark/bookmark-in-list/hooks/use-bookmark-swipe.ts';

export function BookmarkInList({bookmark}: {bookmark: IBookmark}) {
  const onPressAction = useBookmarkPress(bookmark.id);
  const onSwipeAction = useBookmarkSwipe(bookmark.id);
  return (
    <BookmarkCard
      bookmark={bookmark}
      onSwipe={onSwipeAction}
      onPress={onPressAction}
    />
  );
}
