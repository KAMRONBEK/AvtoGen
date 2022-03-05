import React, {useState} from 'react';
import {Animated, Dimensions, Image, StyleSheet, View} from 'react-native';
import {images} from '../../../constants/images';
// import {Logo as SvgLogo} from '../assets/icons/icons';
// import title from '../assets/images/avtogen.png';
// import car from '../assets/images/car.png';
// import car2 from '../assets/images/car2.png';
// import kreslo from '../assets/images/kreslo.png';
// import LoginScreen from './screens/LoginScreen';

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
// let Title = ({scrollX}) => {
//   let center = width / 2 - 182 / 2;
//   const translateX = scrollX.interpolate({
//     inputRange: [0, width, width * 2],
//     outputRange: [center, width + center, 2 * width + center],
//   });
//   const translateY = scrollX.interpolate({
//     inputRange: [0, width, 2 * width, width * 3],
//     outputRange: [150, height / 2 + 210, height / 2 + 210, 80],
//   });
//   return (
//     <Animated.View
//       style={{
//         transform: [{translateX}, {translateY}],
//         ...StyleSheet.absoluteFillObject,
//       }}>
//       <Image source={images.Audo} />
//     </Animated.View>
//   );
// };

// let FirstImage = ({scrollX}) => {
//   let translateX = scrollX.interpolate({
//     inputRange: [0, width],
//     outputRange: [width - 270, width * 2],
//   });
//   return (
//     <Animated.View
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         transform: [{translateX}, {translateY: height - 220}],
//         zIndex: 3,
//       }}>
//       <Image
//         source={images.Audo}
//         style={{
//           zIndex: 2,
//         }}
//       />
//     </Animated.View>
//   );
// };

// let SecondImage = ({scrollX}) => {
//   const translateY = scrollX.interpolate({
//     inputRange: [0, width, 2 * width],
//     outputRange: [-321, 40, -321],
//   });
//   return (
//     <Animated.View
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         transform: [
//           {translateX: 2 * width - width / 2 - 255 / 2},
//           {translateY},
//         ],
//         zIndex: 3,
//       }}>
//       <Image source={images.Audo} style={{zIndex: 2}} />
//     </Animated.View>
//   );
// };

// let ThirdImage = ({scrollX}) => {
//   const scale = scrollX.interpolate({
//     inputRange: [width, 2 * width, 3 * width],
//     outputRange: [0, 1, 0],
//   });
//   let center = 3 * width - width / 2 - 380 / 2.5;
//   const translateX = scrollX.interpolate({
//     inputRange: [2 * width, 3 * width, 4 * width],
//     outputRange: [center, center, 2 * width + center],
//   });
//   const opacity = scrollX.interpolate({
//     inputRange: [width, 1.9 * width, 2 * width, 2.1 * width, 3 * width],
//     outputRange: [0, 0.9, 1, 0, 0],
//   });
//   return (
//     <Animated.View
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         transform: [{translateX}, {translateY: 120}, {scale}],
//         zIndex: 3,
//         opacity,
//       }}>
//       <Image source={images.Audo} style={{zIndex: 2}} />
//     </Animated.View>
//   );
// };

// let Background = ({scrollX}) => {
//   let translateX = scrollX.interpolate({
//     inputRange: [0, width, 2 * width],
//     outputRange: [width - 200, width + width / 2, 2 * width - 80],
//   });
//   let translateY = scrollX.interpolate({
//     inputRange: [0, width, 2 * width],
//     outputRange: [height - 300, -20, 20],
//   });
//   return (
//     <Animated.View
//       style={{
//         ...StyleSheet.absoluteFillObject,
//         width: 300,
//         height: 400,
//         backgroundColor: '#f39c12',
//         borderRadius: 30,
//         zIndex: 1,
//         transform: [{translateX}, {translateY}],
//       }}></Animated.View>
//   );
// };

export {
  // Background, Title, FirstImage, ThirdImage, SecondImage,
  Logo,
};
