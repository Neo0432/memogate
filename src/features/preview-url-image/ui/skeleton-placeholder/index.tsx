import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import {styles} from './style.ts';
import {PropsWithChildren} from 'react';

export function ImagePreviewSkeleton({
  isFetching,
  children,
}: PropsWithChildren<{isFetching: boolean}>) {
  return isFetching ? (
    <SkeletonPlaceholder borderRadius={4}>
      <View style={styles.imageContainer} />
    </SkeletonPlaceholder>
  ) : (
    <>{children}</>
  );
}
