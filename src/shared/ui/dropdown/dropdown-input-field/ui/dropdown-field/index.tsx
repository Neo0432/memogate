import colors from '@shared/styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './style';

export function UIDropdownInputField({
  value,
  data,
  onChange,
  disabled,
}: {
  value?: string;
  data: {label: string; value: any}[];
  onChange: (value: any[]) => void;
  disabled?: boolean;
}) {
  return (
    <Dropdown
      value={value}
      disable={disabled}
      data={data}
      itemContainerStyle={styles.item}
      style={[styles.dropdown, disabled && styles.disabledDropdown]}
      keyboardAvoiding={false}
      search={true}
      activeColor={colors.grayscale.color600}
      mode="modal"
      containerStyle={styles.container}
      labelField="label"
      valueField="value"
      onChange={item => onChange(item.value)}
      searchPlaceholder="Search..."
      inputSearchStyle={styles.search}
      accessibilityLabel={'Dropdown search'}
    />
  );
}
