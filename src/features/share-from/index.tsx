import {useEffect} from 'react';
import {AppState, Linking} from 'react-native';

export function GetShareFrom() {
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
            console.log('Base url', url);
          } else {
            console.error('No base url');
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
