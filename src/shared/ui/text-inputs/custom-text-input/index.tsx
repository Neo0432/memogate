import {useState} from 'react';
import {TextInput, View} from 'react-native';
import {colors, typography} from '@shared/styles';
import {ITextInputProps} from '@/shared/ui/text-inputs';
import {styles} from './styles';

export default function CustomTextInput({
  value,
  placeholder,
  onChangeText,
  onBlur,
  isSecured = true,
  customStyles,
  renderTop,
  multiline,
  children,
}: ITextInputProps): JSX.Element {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <>
      {renderTop}
      <View style={styles.container}>
        <TextInput
          secureTextEntry={!isSecured}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={colors.grayscale.color600}
          style={[
            typography.B_2_Regular_16pt,

            styles.inputInitial,
            isFocused || value ? [styles.inputTyping] : null,
            customStyles ? customStyles : null,
            isFocused ? {color: colors.grayscale.color800} : {},
          ]}
          multiline={multiline}
          onChangeText={onChangeText}
          onBlur={() => {
            onBlur ? onBlur() : null;
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
        />
        {children}
      </View>
    </>
  );
}
