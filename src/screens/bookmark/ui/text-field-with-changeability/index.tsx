import {IBookmarkUpdateDTO} from '@entities/bookmark/types.ts';
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

export function TextFieldWithChangeability({
  itemName,
  value,
  onSubmit,
}: {
  itemName: 'id' | 'title' | 'description' | 'url';
  value: string;
  onSubmit: <K extends keyof IBookmarkUpdateDTO>(data: {
    field: K;
    data: IBookmarkUpdateDTO[K];
  }) => Promise<void>;
}) {
  const [isChange, setIsChange] = useState(false);
  const [fieldValue, setFieldValue] = useState<string>(value);
  console.log(value);

  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.title}>{capitalizeFirstLetter(itemName)}</Text>

      <TouchableOpacity
        onLongPress={() => {
          Vibration.vibrate([0, 50]);
          setIsChange(true);
        }}>
        {isChange ? (
          <TextInput
            value={fieldValue}
            autoFocus={true}
            onChangeText={e => {
              setFieldValue(e);
            }}
            onBlur={() => {
              setIsChange(false);
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
    </View>
  );
}

function capitalizeFirstLetter(val: string): string {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
