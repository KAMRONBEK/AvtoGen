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
import Banner from "../../../OnlineEntriesScrren/components/Banner"
import { useListServices } from '../../../MapsScreen/hook';
import { ROUTES } from '../../../../../../constants/routes';

export default function view() {
  let navigation = useNavigation();
  let text = {
    adrees: 'ул. Лабзак, 12/1, Tashkent',
    name: 'Truman Barbershop',
    clock: '9-18',
  };
  const {listservices} = useListServices();
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
      <Banner />
      <View style={styles.container1}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.BOOKING , {category_id: listservices.category_id,  service_id: listservices.id})}>
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
          />
        </View>
      </View>
    </View>
  );
}
