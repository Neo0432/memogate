import {useState} from 'react';
import {Text, TextInput, TouchableOpacity, Vibration, View} from 'react-native';
import {styles} from './style';
import {Hyperlink} from 'react-native-hyperlink';
import {capitalizeFirstLetter} from '../../lib/capitalize-first-letter';
import {SkeletonTextInputPlaceholder} from '../skeleton-text-input-placeholder';
import {ITextFieldWithChangeabilityProps} from '../../model/types';
import {confirmOpenUrl} from '../../lib/confirm-open-url.ts';

export function TextFieldWithChangeability({
  itemName,
  value,
  onSubmit,
  onChange,
  onBlur,
  isLoading,
}: ITextFieldWithChangeabilityProps) {
  const [isChanging, setIsChanging] = useState(false);

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{capitalizeFirstLetter(itemName)}</Text>
      {!isLoading ? (
        <TouchableOpacity
          onLongPress={() => {
            Vibration.vibrate([0, 50]);
            setIsChanging(true);
          }}>
          {isChanging ? (
            <TextInput
              value={value}
              autoFocus={true}
              onChangeText={onChange}
              onBlur={() => {
                setIsChanging(false);
                onSubmit?.();
                onBlur?.();
              }}
            />
          ) : (
            <Hyperlink onPress={confirmOpenUrl} linkStyle={styles.valueLink}>
              <Text style={styles.value}>{value}</Text>
            </Hyperlink>
          )}
        </TouchableOpacity>
      ) : (
        <SkeletonTextInputPlaceholder />
      )}
    </View>
  );
}
