import {UIRoundedButton} from '@shared/ui/buttons';
import LogoutIcon from '@shared/assets/icons/buttons/logout-button/logout.svg';
import {useAppDispatch} from '@shared/store';
import {logOut} from '@entities/user/model/slice';
import {styles} from './styles';
import {ActionSheetIOS, Platform, Vibration} from 'react-native';

export default function LogoutButton() {
  const dispatch = useAppDispatch();
  return (
    <UIRoundedButton
      size={'small'}
      style={styles.logoutButton}
      customPressedStyle={styles.customPressed}
      colorVariant="secondary"
      onPress={() => {
        Vibration.vibrate([0, 20, 20, 120]);
        callActionSheetForDevice(Platform.OS, dispatch);
      }}>
      <LogoutIcon width={18} height={18} />
    </UIRoundedButton>
  );
}

function callActionSheetForDevice(deviceOS: string, dispatch: any) {
  console.log(deviceOS);
  if (deviceOS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Log out', 'Cancel'],
        title: 'Are you sure you want to log out?',
        destructiveButtonIndex: 1,
        cancelButtonIndex: 0,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        if (buttonIndex === 0) {
        } else if (buttonIndex === 1) {
          dispatch(logOut());
        }
      },
    );
  } else if (deviceOS === 'android') {
    dispatch(logOut());
  }
}
