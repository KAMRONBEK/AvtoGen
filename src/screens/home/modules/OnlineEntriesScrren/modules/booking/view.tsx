import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {
  BackWIcon,
  LeftTwoIcon,
  MenuIocnVertical,
} from '../../../../../../assets/Icons/Icons';
import SwipeButton from 'rn-swipe-button';
import {images} from '../../../../../../constants/images';
import {STRINGS} from '../../../../../../locales/strings';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../../../../constants/colors';

export default function view() {
  let navigation = useNavigation();
  const [hidePass, setHidePass] = useState();
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
      <View style={styles.container2}>
        <Image source={images.Background} style={styles.container1} />
        <Text style={styles.price}>ПРАЙС</Text>
        <View style={styles.ContainerText}>
          <View style={styles.row01}>
            <View style={styles.containerRate}>
              <Text style={styles.rate}>Premium</Text>
              <Text style={styles.hours}>30 min</Text>
            </View>
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <View style={styles.containerbutton}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              ) : (
                <View style={styles.containerbutton1}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.row01}>
            <View style={styles.containerRate}>
              <Text style={styles.rate}>Silver</Text>
              <Text style={styles.hours}>45 min</Text>
            </View>
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <View style={styles.containerbutton}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              ) : (
                <View style={styles.containerbutton1}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.row01}>
            <View style={styles.containerRate}>
              <Text style={styles.rate}>Fade</Text>
              <Text style={styles.hours}>45 min</Text>
            </View>
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <View style={styles.containerbutton}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              ) : (
                <View style={styles.containerbutton1}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.row01}>
            <View style={styles.containerRate}>
              <Text style={styles.rate}>Gold</Text>
              <Text style={styles.hours}>45 min</Text>
            </View>
            <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
              {hidePass ? (
                <View style={styles.containerbutton}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              ) : (
                <View style={styles.containerbutton1}>
                  <Text style={styles.textvib}>Выбрать</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.row01}>
            <Text style={styles.rate1}>Total</Text>
            <Text style={styles.rate01}>
              120<Text style={{fontSize: 15}}>.000 сум </Text>
            </Text>
          </View>
        </View>
        <View style={{marginHorizontal: 20}}>
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
        </View>
      </View>
    </View>
  );
}
