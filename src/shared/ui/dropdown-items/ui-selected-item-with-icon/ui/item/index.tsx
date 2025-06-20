import {View, Text} from 'react-native';
import {styles} from './style';
import {IDropdownSelectedItemWithIcon} from '../../model/types';
import {getSelectedItemIcon} from '../../libs/get-selected-item-icon';

export function UISelectedDropdownItemWithIcon({
  item,
  selected,
  icon,
}: IDropdownSelectedItemWithIcon) {
  const Icon = getSelectedItemIcon(icon);

  return (
    <View style={[styles.container, selected && styles.containerSelected]}>
      <Text style={styles.text}>{item.label}</Text>
      {selected ? <Icon /> : <></>}
    </View>
  );
}
