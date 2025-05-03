import {Vibration} from 'react-native';
import {useDeleteBookmarkMutation} from '@entities/bookmark/api';

export function useBookmarkSwipe(id: string) {
  const [deleteBookmark] = useDeleteBookmarkMutation();

  return () => {
    Vibration.vibrate([0, 100, 20, 100]);
    deleteBookmark(id);
  };
}
