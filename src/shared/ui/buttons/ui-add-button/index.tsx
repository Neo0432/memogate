import {styles} from './styles';
import PlusIcon from '@/shared/assets/icons/buttons/plus-button/plus-icon.svg';
import {UIRoundedButton} from '@/shared/ui/buttons';

export default function UIAddButton({onPress}: {onPress: () => void}) {
  return (
    <UIRoundedButton
      colorVariant="primary"
      onPress={onPress}
      style={styles.addButton}
      size="small">
      <PlusIcon width={24} height={24} />
    </UIRoundedButton>
  );
}
