import {StackHeaderProps} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {BookmarkTabHeader} from '@shared/ui/headers';

export function BookmarkCardHeader({
  route,
  options,
  navigation,
  back,
}: StackHeaderProps) {
  const title = getHeaderTitle(options, route.name);
  return (
    back && (
      <BookmarkTabHeader
        title={title}
        onGoBack={() => {
          navigation.goBack();
        }}
      />
    )
  );
}
