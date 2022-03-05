import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import styles from './style';
import Search from './components/Search';
import {COLORS} from '../../../../constants/colors';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';

const view = () => {
  const navigation = useNavigation();
  const origin = {latitude: 41.28495839091263, longitude: 69.25833026908721};
  const destination = {
    latitude: 41.31943019940532,
    longitude: 69.23019650312479,
  };
  const coordinate = [
    {
      latitude: 41.28495839091263,
      longitude: 69.25833026908721,
    },
    {latitude: 41.31943019940532, longitude: 69.23019650312479},
    {latitude: 41.27089183237682, longitude: 69.18524529672082},
  ];
  const GOOGLE_MAPS_APIKEY = 'AIzaSyAgnw4npdhq0wdH3GQVKNAwEuEBGeM2FxE';
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.32068468233168,
          longitude: 69.24914416040187,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          // onPress={() => navigation.navigate('')}
          coordinate={coordinate[1]}
          title={'chorsu'}
          onCalloutPress={() => navigation.navigate('Services')}
          description={'chorsu'}
          pinColor={COLORS.backgroundColorInput}
        />
        <Marker
          // onPress={() => navigation.navigate('')}
          coordinate={coordinate[2]}
          title={'Chilonzor'}
          onCalloutPress={() => navigation.navigate('Services')}
          description={'Chilonzor'}
          pinColor={COLORS.backgroundColorInput}
        />
        <Marker
          coordinate={coordinate[0]}
          onCalloutPress={() => navigation.navigate('Services')}
          title={'Qwerty'}
          description={'Qwerty'}
          pinColor={COLORS.backgroundColorInput}
        />

        <MapViewDirections
          origin={coordinate[0]}
          destination={coordinate[1]}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor={'black'}
        />
      </MapView>

      <Search />
    </View>
  );
};

export default view;
