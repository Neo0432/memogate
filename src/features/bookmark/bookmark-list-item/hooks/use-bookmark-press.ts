import {Vibration} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookmarkStackNavigatorProps} from '@app/navigation/auth-nav/bookmarks-stack';
import {useNavigation} from '@react-navigation/native';

export const useBookmarkPress = (id: string) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<BookmarkStackNavigatorProps>>();

  return () => {
    Vibration.vibrate([1, 10, 80, 50]);
    navigation.navigate('BookmarksCard', {
      bookmarkId: id,
    });
  };
};
