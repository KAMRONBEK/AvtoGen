import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function HeaderImg() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../assets/Images/AVTOGEN.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 235,
    height: 35,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 55,
  },
});
