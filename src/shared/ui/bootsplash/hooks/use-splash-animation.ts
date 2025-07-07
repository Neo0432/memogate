import {useWindowDimensions} from 'react-native';
import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

export const useSplashAnimation = () => {
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();

  const leftPositionAnimated = useSharedValue<number>(0);
  const topPositionAnimated = useSharedValue<number>(50);
  const rotateDegAnimated = useSharedValue<number>(0);
  const scaleAnimated = useSharedValue<number>(1);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    top: topPositionAnimated.value,
    left: leftPositionAnimated.value,
    transform: [
      {rotateZ: rotateDegAnimated.value + 'deg'},
      {scaleX: scaleAnimated.value},
      {scaleY: scaleAnimated.value},
    ],
  }));

  const opacityAnimated = useSharedValue<number>(1);
  const animatedScreenStyle = useAnimatedStyle(() => ({
    opacity: opacityAnimated.value,
  }));

  const animation = (onAnimationEnd: () => void) => {
    leftPositionAnimated.value = withDelay(
      200,
      withSequence(
        withTiming(-screenWidth / 2 + 100, {
          duration: 400,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(screenWidth / 2 + 100, {
          duration: 500,
          easing: Easing.inOut(Easing.quad),
        }),
      ),
    );

    rotateDegAnimated.value = withSequence(
      withDelay(
        300,
        withTiming(-45, {
          duration: 300,
        }),
      ),
      withTiming(-60, {
        duration: 300,
        easing: Easing.inOut(Easing.quad),
      }),
      withTiming(
        -95,
        {
          duration: 200,
          easing: Easing.inOut(Easing.quad),
        },
        isFinished => {
          if (isFinished) runOnJS(onAnimationEnd)();
        },
      ),
    );

    topPositionAnimated.value = withDelay(
      400,
      withSequence(
        withTiming(screenHeight / 8, {
          duration: 200,
          easing: Easing.inOut(Easing.quad),
        }),
        withTiming(-screenHeight / 2 - 100, {
          duration: 500,
          easing: Easing.inOut(Easing.quad),
        }),
      ),
    );

    scaleAnimated.value = withDelay(
      600,
      withTiming(2.5, {
        duration: 500,
        easing: Easing.inOut(Easing.quad),
      }),
    );

    opacityAnimated.value = withDelay(
      800,
      withTiming(0, {
        duration: 400,
        easing: Easing.inOut(Easing.quad),
      }),
    );
  };

  return {animatedLogoStyle, animatedScreenStyle, animation};
};
