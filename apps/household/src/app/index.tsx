import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';
import LottieView from 'lottie-react-native';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const RootPage = () => {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View className="justify-center items-center flex-1 gap-4 bg-[#FFFCF0]">
      <AnimatedLottieView
        source={require('../../assets/animations/solar_powered_house.json')}
        progress={animationProgress.current}
        style={{ width: '100%', height: '100%' }}
        autoPlay={true}
        loop={true}
      />
    </View>
  );
};

export default RootPage;
