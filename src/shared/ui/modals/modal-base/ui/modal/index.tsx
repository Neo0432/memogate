import {Portal} from '@gorhom/portal';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Modal, View} from 'react-native';
import {ReactNode} from 'react';
import {styles} from './style';

export function ModalBase({children}: {children: ReactNode}) {
  return (
    <Portal>
      <GestureHandlerRootView style={styles.gestureRootView}>
        <Modal transparent statusBarTranslucent>
          <View style={styles.container}>{children}</View>
        </Modal>
      </GestureHandlerRootView>
    </Portal>
  );
}
