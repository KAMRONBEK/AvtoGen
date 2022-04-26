import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import HeaderImg from '../../../../components/general/HeaderImg';
import {images} from '../../../../constants/images';
import OrangeButton from '../../components/OrangeButton';
import styles from './style';
import {useCatigories_2Data} from './hook';
import { ROUTES } from '../../../../constants/routes';

export default function HomeView() {
  const navigation = useNavigation();
  const {catigories} = useCatigories_2Data();
  return (
    <View style={styles.container}>
      <HeaderImg />
      <View>
        {catigories.map(e => {
          return (
            <OrangeButton
              Icon={{uri: e.image}}
              text={e.name}
              onPress={() => navigation.navigate(ROUTES.MAPS, {id: e.id})}
            />
          );
        })}
        <View style={styles.containerimg}>
          <Image style={styles.img} source={images.Left} />
          <Image style={styles.img1} source={images.Right} />
        </View>
      </View>
    </View>
  );
}
