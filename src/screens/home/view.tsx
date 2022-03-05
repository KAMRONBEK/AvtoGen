import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';
import HeaderImg from '../../components/general/HeaderImg';
import OrangeButton from './components/OrangeButton';
import {STRINGS} from '../../locales/strings';
import {
  Armchair,
  Barbershop,
  Car,
  CarSetting,
  Computer,
  Phone,
} from '../../assets/Icons/Icons';
import {images} from '../../constants/images';
import {useNavigation} from '@react-navigation/native';
import SwipeButton from 'rn-swipe-button';
import {useCatigoriesData} from './hooks';

export default function view() {
  const navigation = useNavigation();
  const {catigories} = useCatigoriesData();

  return (
    <View style={styles.container}>
      <HeaderImg />
      <View>
        {catigories.map(e => {
          return (
            <OrangeButton
              Icon={<Car />}
              text={e.name}
              onPress={() => navigation.navigate('Maps')}
            />
          );
        })}
        <OrangeButton Icon={<Barbershop />} text={catigories?.name} />
        <OrangeButton Icon={<Computer />} text={STRINGS.Computerdiagnostics} />
        <OrangeButton Icon={<CarSetting />} text={STRINGS.Bodyrepair} />
        <OrangeButton Icon={<Armchair />} text={STRINGS.Additionalservices} />
        {/* <SwipeButton
          thumbIconImageSource={<Computer />}
          railBackgroundColor="#cfb0dd"
        /> */}
        <Image style={styles.img} source={images.Audo} />
      </View>
    </View>
  );
}
