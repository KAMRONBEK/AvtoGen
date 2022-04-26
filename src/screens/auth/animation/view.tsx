import React, {useState} from 'react';
import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import {images} from '../../../constants/images';

let {width, height} = Dimensions.get('window');

let Logo = ({scrollX}) => {
  let center = width / 2 - 123 / 2;
  const translateX = scrollX.interpolate({
    inputRange: [0, width, width * 2],
    outputRange: [center, width + center, 2 * width + center],
  });
  const translateY = scrollX.interpolate({
    inputRange: [0, width, 2 * width],
    outputRange: [40, height / 2 + 100, height / 2 + 100],
  });
  const opacity = scrollX.interpolate({
    inputRange: [2 * width, 3 * width, 4 * width],
    outputRange: [1, 0, 0],
  });
  return (
    <Animated.View
      style={{
        // transform: [{translateX}, {translateY}],
        ...StyleSheet.absoluteFillObject,
        zIndex: 3,
        opacity,
        flex: 1,
      }}>
      <Image source={images.Avtogen} />
    </Animated.View>
  );
};