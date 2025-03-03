import {Text, View} from 'react-native';
import FolderWithSearch from '@shared/assets/icons/no-data/folder-with-search.svg';
import {styles} from './style';

export default function NoBookmarksCreated() {
  return (
    <View style={styles.container}>
      <FolderWithSearch width={22.67} height={21.33} />
      <Text style={styles.text}>No bookmarks have been created yet</Text>
    </View>
  );
}
