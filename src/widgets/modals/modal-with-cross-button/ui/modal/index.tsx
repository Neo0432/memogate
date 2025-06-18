import {
  Animated,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Vibration,
} from 'react-native';
import {styles} from './style.ts';
import {UICloseButton} from '@shared/ui/buttons';
import {ModalBase} from '@shared/ui/modals';
import View = Animated.View;
import {PropsWithChildren} from 'react';

export function ModalWithCrossButton({
  onButtonPress,
  title,
  children,
}: PropsWithChildren<{onButtonPress: () => void; title?: string}>) {
  return (
    <ModalBase>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.substrate}>
          <UICloseButton
            size="small"
            colorVariant="secondary"
            onPress={() => {
              Vibration.vibrate([0, 10, 20, 80]);
              onButtonPress();
            }}
            style={styles.closeButton}
          />
          {title && <Text style={styles.titleOfModal}>{title}</Text>}
          {children}
        </View>
      </TouchableWithoutFeedback>
    </ModalBase>
  );
}
