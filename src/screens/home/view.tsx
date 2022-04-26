import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';
import HeaderImg from '../../components/general/HeaderImg';
import {images} from '../../constants/images';
import {ROUTES} from '../../constants/routes';
import OrangeButton from './components/OrangeButton';
import {useCatigoriesData} from './hooks';
import styles from './style';

export default function HomeView() {
  const navigation = useNavigation();
  const {catigories} = useCatigoriesData();

  return (
    <View style={styles.container}>
      <HeaderImg />
      <View>
        {catigories.map(e => {
          
          return (
            <OrangeButton
              Icon={{uri: e.image}}
              text={e.name}
              onPress={() => navigation.navigate(ROUTES.CATEGORIES, {id: e.id})}
              
            />
          );
        })}
        <Image style={styles.img} source={images.Audo} />
      </View>
    </View>
  );
}
