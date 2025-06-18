import {styles} from './style';
import {Text, View} from 'react-native';
import {PropsWithChildren} from 'react';
import {UIButton} from '@shared/ui/buttons';
import SmallCloseButton from '@shared/assets/icons/buttons/close-button/close_small_24dp_icon.svg';
import {colors} from '@shared/styles';
import {IBookmarkTagProps} from '../../model/types';

export function BookmarkTag({
  style,
  onRemove,
  children,
}: PropsWithChildren<IBookmarkTagProps>) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.textStyle}>{children}</Text>
      <UIButton onPress={onRemove}>
        <SmallCloseButton color={colors.grayscale.color200} />
      </UIButton>
    </View>
  );
}
