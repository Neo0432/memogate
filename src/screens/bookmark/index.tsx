import {ScrollView, View} from 'react-native';
import {PreviewWebsiteImage} from '@screens/bookmark/ui/preview-url-image';

export function BookmarkScreen() {
  return (
    <View>
      <PreviewWebsiteImage
        url={'https://www.npmjs.com/package/react-native-skeleton-content'}
      />
      <ScrollView></ScrollView>
    </View>
  );
}
