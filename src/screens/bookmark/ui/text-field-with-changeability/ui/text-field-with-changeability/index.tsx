import {IBookmarkUpdateDTO} from '@entities/bookmark/types';
import {useState} from 'react';
import {
  Alert,
  Linking,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';
import {styles} from './style';
import {Hyperlink} from 'react-native-hyperlink';
import {capitalizeFirstLetter} from '../../lib/capitalize-first-letter';
import {SkeletonTextInputPlaceholder} from '../skeleton-text-input-placeholder';

interface ITextFieldWithChangeabilityProps {
  itemName: 'id' | 'title' | 'description' | 'url';
  value?: string;
  onSubmit: <K extends keyof IBookmarkUpdateDTO>(data: {
    field: K;
    data: IBookmarkUpdateDTO[K];
  }) => Promise<void>;
  isLoading?: boolean;
}

export function TextFieldWithChangeability({
  itemName,
  value,
  onSubmit,
  isLoading,
}: ITextFieldWithChangeabilityProps) {
  const [isChanging, setIsChanging] = useState(false);
  const [fieldValue, setFieldValue] = useState<string>(value || '');

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
              value={fieldValue}
              autoFocus={true}
              onChangeText={e => {
                setFieldValue(e);
              }}
              onBlur={() => {
                setIsChanging(false);
                onSubmit({field: itemName, data: fieldValue});
              }}
            />
          ) : (
            <Hyperlink
              onPress={url => {
                Alert.alert('Открыть ссылку?', url, [
                  {text: 'Отмена', style: 'cancel'},
                  {text: 'ОК', onPress: () => Linking.openURL(url)},
                ]);
              }}
              linkStyle={styles.valueLink}>
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
