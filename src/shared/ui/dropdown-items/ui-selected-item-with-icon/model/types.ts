export interface IDropdownSelectedItemWithIcon {
  item: {label: any; value: any};
  selected?: Boolean;
  icon: DropdownSelectedItemIcons;
}

export type DropdownSelectedItemIcons = 'rounded-check';
