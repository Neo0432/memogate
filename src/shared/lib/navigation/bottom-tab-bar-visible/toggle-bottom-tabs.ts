import {useEffect} from 'react';
import {hideBottomTabs, showBottomTabs} from '@shared/lib/navigation';
import {NavigationProp, NavigationState} from '@react-navigation/native';

export default function ToggleBottomTabs(
  navigation: Omit<NavigationProp<any>, 'getState'> & {
    getState(): NavigationState | undefined;
  },
) {
  useEffect(() => {
    hideBottomTabs(navigation);

    return () => {
      showBottomTabs(navigation);
    };
  }, [navigation]);
}
