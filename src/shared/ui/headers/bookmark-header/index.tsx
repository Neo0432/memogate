import {View, Text} from 'react-native';
import LeftArrowIcon from '@/shared/assets/icons/buttons/left-arrow-button/left-arrow.svg';
import {styles} from './styles';
import {UIRoundedButton} from '@/shared/ui/buttons';
import {typography} from '@shared/styles';

export default function BookmarkTabHeader({
  title,
  onGoBack,
}: {
  title: string;
  onGoBack: () => void;
}): JSX.Element {
  return (
    <View style={styles.container}>
      <UIRoundedButton
        size={'small'}
        style={styles.goBackButton}
        customPressedStyle={styles.customPressed}
        colorVariant="secondary"
        onPress={onGoBack}>
        <LeftArrowIcon width={18} height={18} />
      </UIRoundedButton>
      <Text style={typography.H_1_SemiBold_20pt}>{title}</Text>
    </View>
  );
}
