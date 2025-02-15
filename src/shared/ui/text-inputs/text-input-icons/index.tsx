import {ColorValue, TouchableOpacity} from 'react-native';
import CorrectInputCheck from './assets/correct-input-check.svg';
import EyeOpenIcon from './assets/eye-open.svg';
import EyeClosedIcon from './assets/eye-closed.svg';
import {PropsType, EyeToggleProps} from '@/shared/ui/text-inputs';

export default function TextInputIcons({
  type,
  fieldState,
  style,
  color,
  isPasswordShown,
  setIsPasswordShown,
}: PropsType): JSX.Element {
  return (
    <>
      {!fieldState.invalid && type !== 'password' ? (
        fieldState.isTouched && <GreenCheck style={style} />
      ) : type === 'password' &&
        isPasswordShown !== undefined &&
        setIsPasswordShown !== undefined ? (
        <EyeToggle
          isPasswordShown={isPasswordShown}
          style={style}
          color={color}
          onPress={() => setIsPasswordShown(!isPasswordShown)}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export function GreenCheck({style}: {style?: object}): JSX.Element {
  return <CorrectInputCheck width={20} height={20} style={style} />;
}

function EyeOpen({color}: {color: ColorValue | undefined}): JSX.Element {
  return <EyeOpenIcon fill={color} width={20} height={20} />;
}

function EyeClosed({color}: {color: ColorValue | undefined}): JSX.Element {
  return <EyeClosedIcon fill={color} width={20} height={20} />;
}

export function EyeToggle({
  isPasswordShown,
  color,
  style,
  onPress,
}: EyeToggleProps): JSX.Element {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={style}>
      {isPasswordShown ? (
        <EyeOpen color={color} />
      ) : (
        <EyeClosed color={color} />
      )}
    </TouchableOpacity>
  );
}
