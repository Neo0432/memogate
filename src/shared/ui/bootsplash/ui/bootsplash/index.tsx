import BootSplash from 'react-native-bootsplash';
import {useSplashAnimation} from '../../hooks/use-splash-animation';
import Animated from 'react-native-reanimated';

export const AnimatedBootSplash = ({
  onAnimationEnd,
}: {
  onAnimationEnd: () => void;
}) => {
  const {animatedLogoStyle, animatedScreenStyle, animation} =
    useSplashAnimation();

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('@shared/assets/bootsplash/manifest.json'),
    logo: require('@shared/assets/bootsplash/logo.png'),

    statusBarTranslucent: true,
    navigationBarTranslucent: true,

    animate: () => animation(onAnimationEnd),
  });

  return (
    <Animated.View
      {...container}
      style={[container.style, animatedScreenStyle]}>
      <Animated.Image {...logo} style={[logo.style, animatedLogoStyle]} />
    </Animated.View>
  );
};
