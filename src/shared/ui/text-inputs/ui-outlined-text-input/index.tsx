import {View, TextInput} from 'react-native';
import {ITextInputProps} from '../types';
import {styles} from './style.ts';
import {forwardRef, useState} from 'react';
import {colors} from '@shared/styles';

export const UIOutlinedTextInput = forwardRef<TextInput, ITextInputProps>(
  (
    {
      isSecured,
      label,
      customStyles,
      renderTop,
      onBlur,
      value,
      onChangeText,
      disabled,
      ...textInputProps
    },
    ref,
  ) => {
    const [focused, setFocused] = useState<boolean>(false);

    return (
      <View
        style={[
          styles.container,
          focused && styles.containerFocused,
          disabled && styles.containerDisabled,
        ]}>
        <TextInput
          ref={ref}
          value={value}
          {...textInputProps}
          placeholderTextColor={
            focused ? colors.additional.lightblue : colors.grayscale.color600
          }
          editable={!disabled}
          multiline={true}
          secureTextEntry={isSecured}
          onChangeText={text => {
            if (text.length < 20) onChangeText?.(text);
            else onChangeText?.(value);
          }}
          style={styles.inputInitial}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
            onBlur?.();
          }}
        />
      </View>
    );
  },
);
