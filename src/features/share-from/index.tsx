import {useEffect} from 'react';
import {AppState, Linking} from 'react-native';

export function GetShareFrom() {
  console.log('a');
  useEffect(() => {
    const handleUrl = (event: {url: string}) => {
      console.log('🔗 URL получен:', event.url);
    };

    // Подписываемся на изменение состояния приложения
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        console.log('🔄 Приложение снова активно, проверяем URL...');
        Linking.getInitialURL().then(url => {
          if (url) {
            console.log('✅ Начальный URL:', url);
          } else {
            console.log('❌ Начального URL нет');
          }
        });
      }
    };

    const subscription = Linking.addEventListener('url', handleUrl);
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      subscription.remove();
      appStateSubscription.remove();
    };
  }, []);
  return <></>;
}
