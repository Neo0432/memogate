import {effects} from '@shared/styles';

export default function ShowBottomTabs(navigator: any) {
  if (!navigator) return;
  const parent = navigator.getParent();
  if (parent) {
    parent.setOptions({tabBarStyle: {display: 'none'}});
  }

  if (parent) {
    parent.setOptions({
      tabBarStyle: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        height: 105,
        paddingInline: 20,
        paddingTop: 12,
        paddingBottom: 36,

        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderTopWidth: 0,

        ...effects.shadow1,
      },
    });
  }
}
