import {styles} from './style';
import SearchIcon from '@shared/assets/icons/buttons/search-button/search-icon.svg';
import {UIRoundedButton} from '@shared/ui/buttons';

export function SearchButton({onSubmit}: {onSubmit: () => void}) {
  return (
    <UIRoundedButton
      size="small"
      colorVariant="secondary"
      style={styles.searchButton}
      customPressedStyle={styles.customPressed}
      onPress={onSubmit}>
      <SearchIcon width={18} height={18} />
    </UIRoundedButton>
  );
}
