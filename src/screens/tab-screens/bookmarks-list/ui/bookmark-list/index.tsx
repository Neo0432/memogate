import {UserCard} from '@shared/ui/card';
import {useAppSelector} from '@shared/store';
import {IUser} from '@entities/user/types.ts';
import {selectUser} from '@entities/user/model/selectors.ts';
import {useState} from 'react';
import {Vibration, View} from 'react-native';
import {styles} from './style';
import {UIAddButton} from '@shared/ui/buttons';
import {CreateBookmarkModal} from '@features/modals';

import {GetShareFrom} from '@features/share-from';
import {BookmarksList} from '@features/bookmark';

export function BookmarksListScreen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user: IUser = useAppSelector(selectUser);

  return (
    <View style={styles.pageContainer}>
      <UserCard user={user} />
      <BookmarksList />

      <UIAddButton
        onPress={() => {
          Vibration.vibrate(10);
          setIsModalOpen(true);
        }}
      />

      {isModalOpen && <CreateBookmarkModal setIsModalOpen={setIsModalOpen} />}
      <GetShareFrom />
    </View>
  );
}
