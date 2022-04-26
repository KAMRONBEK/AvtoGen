import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import MapView, {Marker, Polyline, } from 'react-native-maps';
import styles from './style';
import Search from './components/Search';
import {COLORS} from '../../../../constants/colors';
import MapViewDirections from 'react-native-maps-directions';
import {useNavigation} from '@react-navigation/native';
import {useListServices} from './hook';

const view = () => {
  const origin  = {
  latitude: 41.31943019940532,
  longitude: 69.23019650312479,
}
const destination ={
  latitude: 41.32697880052311,
  longitude: 69.28334919586435

}
  const {listservices} = useListServices();
  const navigation = useNavigation();
  // let api = 'AIzaSyAg85fttaNZA_wmaZgvpFfzrUs8ohWrVBc'

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
        {listservices.map(e => {
          let split = e.location.split(',');
          let latitude = parseFloat(split[0]);
          let longitude = parseFloat(split[1]);
          
          return (
            <Marker
              onPress={() => navigation.navigate( "Services", {category_id: e.category_id,  service_id: e.id})}
              coordinate={{
                latitude,
                longitude,
              }}
              title={e.name}
              pinColor={COLORS.backgroundColorInput}
            />
          );
        })}
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={api}
          strokeWidth={3}
          strokeColor="hotpink"
        /> */}
      </MapView>
      <Search />
    </View>
  );
};

export default view;
