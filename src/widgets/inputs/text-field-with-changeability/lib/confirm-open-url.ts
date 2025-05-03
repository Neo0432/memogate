import {Alert, Linking} from 'react-native';

export const confirmOpenUrl = (url: string) => {
  Alert.alert('Открыть ссылку?', url, [
    {text: 'Отмена', style: 'cancel'},
    {text: 'ОК', onPress: () => Linking.openURL(url)},
  ]);
};
