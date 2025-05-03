import {useState} from 'react';
import {Text} from 'react-native';
import {UIButton} from '@/shared/ui/buttons';
import {ICustomTextButtonProps} from '@/shared/ui/buttons';
import {colors} from '@shared/styles';
import {getTextStyleColor} from './style';

export default function UITextButton({
  disabled,
  customTextStyle,
  onPress,
  children,
}: ICustomTextButtonProps): JSX.Element {
  const textStylePressed = {
    color: '#A1654B',
  };
  const [pressed, setPressed] = useState<boolean>(false);
  const baseStyles = getTextStyleColor(disabled);

  return (
    <UIButton
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Text style={[baseStyles, pressed && textStylePressed, customTextStyle]}>
        {children}
      </Text>
    </UIButton>
  );
}
