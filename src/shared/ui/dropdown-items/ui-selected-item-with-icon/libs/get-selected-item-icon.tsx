import {colors} from '@/shared/styles';
import {DropdownSelectedItemIcons} from '../model/types';
import RoundedCheck from '@shared/assets/icons/dropdown/item/check_circle_24dp_opsz24.svg';
import {ReactNode} from 'react';

const icons: Record<
  DropdownSelectedItemIcons,
  ({color}: {color?: string}) => ReactNode
> = {
  ['rounded-check']: ({color}: {color?: string}) => (
    <RoundedCheck width={24} height={24} color={colors.additional.success} />
  ),
};

export const getSelectedItemIcon = (icon: DropdownSelectedItemIcons) => {
  return icons[icon];
};
