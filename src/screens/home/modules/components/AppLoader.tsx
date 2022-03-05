import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import {COLORS} from '../../../../constants/colors';

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        style={{height: 150}}
        source={require('../../../../assets/Images/84195-loader.json')}
        autoPlay
        loop
      />
      <Text style={{color: COLORS.white, fontSize: 18}}>
        Ваш запрос в ожидания
      </Text>
    </View>
  );
};

export default AppLoader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1,
  },
});
