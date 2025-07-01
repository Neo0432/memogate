import {UIRoundedButton} from '@shared/ui/buttons';
import AddIcon from '@shared/assets/icons/buttons/plus-button/add_20dp-icon.svg';
import {colors} from '@shared/styles';
import {styles} from './style.ts';
import {StyleProp, ViewStyle} from 'react-native';

export function UISmallRoundedAddButton({
  onPress,
  style,
}: {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <UIRoundedButton
      colorVariant={'primary'}
      onPress={onPress}
      size="small"
      style={[styles.addButton, style]}>
      <AddIcon width={20} height={20} color={colors.grayscale.color200} />
    </UIRoundedButton>
  );
}
