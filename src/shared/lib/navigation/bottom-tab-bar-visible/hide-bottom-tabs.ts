import {NavigationProp, NavigationState} from '@react-navigation/native';

export default function hideBottomNav(
  navigator: Omit<NavigationProp<any>, 'getState'> & {
    getState(): NavigationState | undefined;
  },
) {
  if (!navigator) return;
  const parent = navigator.getParent();
  if (parent) {
    parent.setOptions({tabBarStyle: {display: 'none'}});
  }
}
