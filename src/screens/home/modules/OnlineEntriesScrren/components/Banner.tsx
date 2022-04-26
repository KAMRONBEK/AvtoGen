import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../../constants/colors';
import { useServices } from './Bannerhooks';
import { images } from '../../../../../constants/images';

export default function Banner() {
  const {services} = useServices()
  return (
    <View>
       <View style={styles.imgcontainer}>
        <Image style={styles.img} source={images.BackgroundImg} />
        <Image style={styles.img1} source={{uri: services.image}} />
      </View>
      <View style={styles.textcontainer}>
        <View>
          <Text style={styles.textname}>{services.name}</Text>
          <Text style={styles.textadrees}>{services.address}</Text>
        </View>
        <Text style={styles.textclock}>
          {services.time}
        </Text>
      </View> 
    </View>
  )
}


const styles = StyleSheet.create({
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textname: {
    width:210,
    fontSize: 22,
    color: COLORS.white,
  },
  textadrees: {
    width:210,
    fontSize: 16,
    color: COLORS.white,
  },
  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  textclock: {
    fontSize: 18,
    color: COLORS.white,
    marginTop: 20,
    marginHorizontal: 35,
  },
  img: {
    width: 325,
    height: 325,
    position: 'absolute',
  },
  img1: {
    width: 210,
    height: 230,
  },
});
