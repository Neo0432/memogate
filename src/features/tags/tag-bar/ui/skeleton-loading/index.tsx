import {PropsWithChildren} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function TagSkeletonLoading({
  isLoading,
  children,
}: PropsWithChildren<{
  isLoading: boolean;
}>) {
  return isLoading ? (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" gap={4}>
        <SkeletonPlaceholder.Item width={96} height={32} borderRadius={18} />
        <SkeletonPlaceholder.Item width={96} height={32} borderRadius={18} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  ) : (
    <>{children}</>
  );
}
