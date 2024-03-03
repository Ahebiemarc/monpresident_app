import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import { circleContainerSize } from '../../constants/Constants';
import { CircleProps } from '../../types/types';
import { Colors } from '../../constants/colors/Colors';


const AnimatedCircle = ({circleX} : CircleProps) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: Colors.colorOnclick,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnimatedCircle;

