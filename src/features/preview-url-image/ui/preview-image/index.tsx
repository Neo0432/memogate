import {Image, View} from 'react-native';
import {styles} from './style';
import {useGetWebsitePreviewUrl} from '@features/preview-url-image/hooks/use-get-website-preview.ts';
import {ImagePreviewSkeleton} from '../skeleton-placeholder';
import {ImagePreviewNoData} from '../no-data-placeholder';
import {useEffect} from 'react';

export function PreviewWebsiteImage({url}: {url?: string}) {
  const {data: previewData, isFetching} = useGetWebsitePreviewUrl(url);

  return (
    <View style={styles.imageContainer}>
      <ImagePreviewSkeleton isFetching={isFetching}>
        {!previewData ? (
          <ImagePreviewNoData />
        ) : (
          <Image
            source={{uri: previewData?.image}}
            style={styles.imageContainer}
          />
        )}
      </ImagePreviewSkeleton>
    </View>
  );
}
