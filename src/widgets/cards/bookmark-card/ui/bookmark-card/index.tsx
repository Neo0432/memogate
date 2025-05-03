import {IBookmark} from '@entities/bookmark/types.ts';
import RightBookmarkAction from '../right-action';
import Card from '../substrate';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './style';

export default function BookmarkCard({
  bookmark,
  onSwipe,
  onPress,
}: {
  bookmark: IBookmark;
  onSwipe?: () => void;
  onPress?: () => void;
}) {
  return (
    <Card
      onSwipe={onSwipe}
      renderRightAction={progress => (
        <RightBookmarkAction progress={progress} />
      )}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.content}>
          <Text style={styles.title}>{bookmark.title}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {bookmark.description}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
}
