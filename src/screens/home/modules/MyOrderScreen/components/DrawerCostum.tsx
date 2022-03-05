import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {COLORS} from '../../../../../constants/colors';
import {
  DrawerbackIcon,
  FezbookIcon,
  GmilIcon,
  InstagramIcon,
  TeligramIcon,
} from '../../../../../assets/Icons/Icons';
import {images} from '../../../../../constants/images';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions, useNavigation} from '@react-navigation/native';
let number = '+998977250000';

const DrawerCostum = props => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView showsVerticalScrollIndicator={false}  {...props}>
        <View style={styles.row}>
          <TouchableOpacity onPress={onMenuPress}>
            <DrawerbackIcon />
          </TouchableOpacity>
          <Image style={styles.img} source={images.AvtogenDrawer} />
        </View>
        <View style={{}}>
          <View
            style={{backgroundColor: COLORS.backgroundColorInput, marginTop:50, width: 100}}
          />
          {/* <DrawerItemList   {...props} /> */}
          <TouchableOpacity onPress={() => navigation.navigate('Главная')}>
            <Text style={styles.text}>Главная</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Моизаказы')}>
            <Text style={styles.text}>Мои заказы</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => navigation.navigate('Настройки')}>
            <Text style={styles.text}>Настройки</Text>
          </TouchableOpacity>
         
        </View>
        <View style={styles.containerimg}>
          {/* <Image style={styles.img2} source={images.DrawerImg} /> */}
        </View>
        <View style={styles.numbercontainer}>
          <Text style={styles.number}>{number}</Text>
          <Text style={styles.number}>{number}</Text>
        </View>
        <View style={styles.row1}>
          <FezbookIcon />
          <InstagramIcon />
          <GmilIcon />
          <TeligramIcon />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerCostum;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.backgroundColorInput,
  },
  img: {
    width: 150,
    height: 23,
  },
  row: {
    marginVertical: 10,
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  row1: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 180,
  },
  img2: {
    width: 350,
    height: 250,
  },
  containerimg: {
    height: 400,
    justifyContent: 'flex-end',
  },
  number: {
    marginVertical: 5,
    fontSize: 16,
    color: COLORS.white,
  },
  numbercontainer: {
    height: 100,
    justifyContent: 'flex-end',
  },
text:{
  fontSize:20,
  color:COLORS.white,
  marginHorizontal:15,
  marginVertical:7,
}
});
