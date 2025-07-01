import {forwardRef} from 'react';
import {MultiSelect} from 'react-native-element-dropdown';
import {colors} from '@shared/styles';
import {styles} from './style';
import FilterIcon from '@shared/assets/icons/buttons/filter-button/filter_list_20dp_opsz20.svg';
import {IDropdownFilter} from '../../model/types';

export const DropdownMultiSelect = forwardRef<any, IDropdownFilter>(
  function DropdownMultiSelect(
    {
      disabled,
      visibleSelectedItem = false,
      renderRightIcon,
      leftIcon,
      style,
      ...dropdownProps
    },
    ref,
  ) {
    return (
      <MultiSelect
        ref={ref}
        renderLeftIcon={leftIcon ? leftIcon : FilterIconComponent}
        labelField={'label'}
        valueField={'value'}
        style={[styles.container, style]}
        placeholderStyle={styles.text}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        containerStyle={styles.containerDropdown}
        selectedStyle={styles.selectedItem}
        selectedTextStyle={styles.selectedItemText}
        disable={disabled}
        activeColor={colors.grayscale.color500}
        visibleSelectedItem={visibleSelectedItem}
        renderRightIcon={renderRightIcon ? renderRightIcon : () => <></>}
        {...dropdownProps}
      />
    );
  },
);

const FilterIconComponent = () => <FilterIcon width={20} height={20} />;
