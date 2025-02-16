import {colors} from '@/shared/ui/uikit';

export function getTextStyleColor(disabled?: boolean) {
  const textStyleInitial = {
    color: colors.additional.apricot,
  };
  const textStyleDisabled = {
    color: colors.grayscale.color600,
  };
  return disabled ? textStyleDisabled : textStyleInitial;
}
