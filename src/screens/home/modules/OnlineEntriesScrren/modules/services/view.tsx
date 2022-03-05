import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '../../../../../../constants/images';
import {STRINGS} from '../../../../../../locales/strings';
import {
  BackWIcon,
  BellIcon,
  Computer,
  LeftIcon,
  LeftTwoIcon,
  LIcon,
  MenuIocnVertical,
  RIcon,
} from '../../../../../../assets/Icons/Icons';
import {useNavigation} from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import {COLORS} from '../../../../../../constants/colors';

export default function view() {
  let navigation = useNavigation();
  let text = {
    adrees: 'ул. Лабзак, 12/1, Tashkent',
    name: 'Truman Barbershop',
    clock: '9-18',
  };
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <View style={styles.back}>
            <BackWIcon />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <MenuIocnVertical />
        </TouchableOpacity>
      </View>
      <View style={styles.imgcontainer}>
        <Image style={styles.img} source={images.BackgroundImg} />
        <Image style={styles.img1} source={images.Chair} />
      </View>
      <View style={styles.textcontainer}>
        <View>
          <Text style={styles.textname}>{text.name}</Text>
          <Text style={styles.textadrees}>{text.adrees}</Text>
        </View>
        <Text style={styles.textclock}>
          {text.clock}
          <Text style={styles.text}>{STRINGS.Hours}</Text>
        </Text>
      </View>

      <View style={styles.container1}>
        <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
          <View style={styles.containerbox}>
            <Text style={styles.textcol}>Посмотерть услуги</Text>
            <LeftIcon />
          </View>
        </TouchableOpacity>
        <View style={styles.containerbtn}>
          <SwipeButton
            thumbIconImageSource={require('../../../../../../assets/Images/button.png')}
            railBackgroundColor={COLORS.backgroundColorInput}
            title="Прямо сейчас"
            titleFontSize={15}
            thumbIconComponent={LeftTwoIcon}
            thumbIconBackgroundColor="#F7BA59"
            titleColor={COLORS.white}
            thumbIconBorderColor={COLORS.backgroundColorInput}
            railFillBackgroundColor="rgba(0,0,0,0.1)"
            railFillBorderColor="rgba(0,0,0,0.1)"
            height={60}
            width={310}
          />
          <View style={styles.textpadd} />
          <SwipeButton
            // thumbIconImageSource={require('../../../../../../assets/Images/button.png')}
            railBackgroundColor={COLORS.backgroundColorInput}
            title="Выбрать время"
            thumbIconComponent={LeftTwoIcon}
            thumbIconBackgroundColor="#F7BA59"
            titleFontSize={15}
            titleColor={COLORS.white}
            onSwipeSuccess={() => navigation.navigate('Entries')}
            disabledRailBackgroundColor={COLORS.backgroundColorInput}
            thumbIconBorderColor={COLORS.backgroundColorInput}
            railFillBackgroundColor="rgba(0,0,0,0.1)"
            railFillBorderColor="rgba(0,0,0,0.1)"
            height={60}
            width={310}
            // screenReaderEnabled={navigation.goBack}
          />
        </View>
      </View>
    </View>
  );
}
