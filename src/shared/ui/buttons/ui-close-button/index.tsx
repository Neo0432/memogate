import {IButtonWithLoadingProps} from '@shared/ui/buttons';
import {UIRoundedButton} from '@shared/ui/buttons';
import CloseButtonIcon from '@shared/assets/icons/buttons/close-button/close-icon.svg';

export default function UICloseButton({
  ...uiRoundedButtonProps
}: IButtonWithLoadingProps) {
  return (
    <UIRoundedButton {...uiRoundedButtonProps}>
      <CloseButtonIcon width={18} height={18} />
    </UIRoundedButton>
  );
}
