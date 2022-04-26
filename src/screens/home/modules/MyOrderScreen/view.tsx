import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  BackIcon,
  BackWIcon,
  MenuIocnVertical,
} from '../../../../assets/Icons/Icons';
import {STRINGS} from '../../../../locales/strings';
import {images} from '../../../../constants/images';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import Tabbar from './components/Tabs';

export default function view() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={images.Avtogen} />
      </View>
      <View style={styles.backheader}>
        <TouchableOpacity onPress={navigation.goBack}>
          <BackWIcon />
        </TouchableOpacity>
        <Text style={styles.title}>{STRINGS.Myorder}</Text>
        <MenuIocnVertical />
      </View>
      <Tabbar />
    </View>
  );
}
