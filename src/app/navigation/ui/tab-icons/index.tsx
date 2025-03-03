import {colors} from '@shared/ui/uikit';
import BookmarksIcon from '@shared/assets/icons/navigation/BookmarksIcon.svg';
import SearchIcon from '@shared/assets/icons/navigation/SearchIcon.svg';

export function Bookmarks({focused, size}: any): JSX.Element {
  return (
    <BookmarksIcon
      width={size}
      height={size}
      color={focused ? colors.grayscale.color800 : colors.grayscale.color600}
    />
  );
}

export function Search({focused, size}: any): JSX.Element {
  return (
    <SearchIcon
      width={size}
      height={size}
      color={focused ? colors.grayscale.color800 : colors.grayscale.color600}
    />
  );
}
