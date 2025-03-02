import {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {getWebsitePreview} from '@screens/bookmark/ui/preview-url-image/lib';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './style';

export function PreviewWebsiteImage({url}: {url: string}) {
  const [previewImage, setPreviewImage] = useState<{
    title: string;
    description: string;
    image: string;
  } | null>(null);

  useEffect(() => {
    const getPreview = async () => {
      const preview = await getWebsitePreview(url);
      console.log('Preview data:', preview);
      setPreviewImage(preview);
    };

    getPreview();
  }, [url]);

  return (
    <View style={styles.imageContainer}>
      {!previewImage?.image ? (
        <SkeletonPlaceholder borderRadius={4}>
          <View style={styles.imageContainer} />
        </SkeletonPlaceholder>
      ) : (
        <Image
          source={{uri: previewImage.image}}
          style={styles.imageContainer}
        />
      )}
    </View>
  );
}
