import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {
  BackWIcon,
  MenuIocnVertical,
  MenuIocnVertical1,
} from '../../../assets/Icons/Icons';

export default function Imgcomponent() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backheader}>
        <TouchableOpacity onPress={navigation.goBack}>
          <BackWIcon />
        </TouchableOpacity>
        <View
          style={{
            borderRadius: 80,
            width: 45,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,

            elevation: 1,
          }}>
          <MenuIocnVertical1 />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorInput,
  },
  backheader: {},
});
