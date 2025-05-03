import {styles} from './style.ts';
import {View} from 'react-native';
import ImageIcon from '@shared/assets/icons/no-data/image_54dp_opsz48.svg';
import {colors} from '@shared/styles';

export function ImagePreviewNoData() {
  return (
    <View style={styles.imageContainer}>
      <ImageIcon width={72} height={72} fill={colors.grayscale.color700} />
    </View>
  );
}
