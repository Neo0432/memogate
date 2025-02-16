import {JSX, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import LoadingIndicatorPrimaryIcon from '@/shared/assets/icons/loading/load-indicator.svg';
import LoadingIndicatorSecondaryIcon from '@/shared/assets/icons/loading/load-indicator-white.svg';

export function LoadAnimatedIndicator({
  colorVariant,
}: {
  colorVariant: 'primary' | 'secondary';
}): JSX.Element {
  const rotateAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const loopAnimation = Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    );

    loopAnimation.start();

    return () => loopAnimation.stop();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{transform: [{rotate}]}}>
      {colorVariant === 'primary' ? (
        <LoadingIndicatorPrimaryIcon width={22} height={22} />
      ) : (
        <LoadingIndicatorSecondaryIcon width={22} height={22} />
      )}
    </Animated.View>
  );
}
