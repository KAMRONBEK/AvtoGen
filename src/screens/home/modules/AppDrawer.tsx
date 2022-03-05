import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MapsScreen} from './MapsScreen';
import {COLORS} from '../../../constants/colors';
import {MyOrderScreen} from './MyOrderScreen';
import DrawerCostum from './MyOrderScreen/components/DrawerCostum';
import ImgComponent from '../components/Imgcomponent';
import HomeScreen from '../view';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Switch} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
import {OnlineEntriesScreen} from './OnlineEntriesScrren';
import {ServicesScreen} from './OnlineEntriesScrren/modules/services';
import {BookingScreen} from './OnlineEntriesScrren/modules/booking';

const Drawer = createDrawerNavigator();

function Setting() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function MapsStack() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={props => <DrawerCostum {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: COLORS.white,
          drawerInactiveTintColor: COLORS.white,

          drawerLabelStyle: {
            fontSize: 18,
          },
          drawerItemStyle: {
            marginVertical: -3,
            backgroundColor: COLORS.backgroundColorInput,
          },
          drawerStyle: {
            backgroundColor: COLORS.backgroundColorInput,
          },
        }}>
        <Drawer.Screen name=" " component={MapsScreen} />
        <Drawer.Screen name="Главная" component={HomeScreen} />
        <Drawer.Screen name="Моизаказы" component={MyOrderScreen} />
        <Drawer.Screen name="Настройки" component={Setting} />
        <Drawer.Screen name="Maps" component={MapsStack} />
        <Drawer.Screen name="Entries" component={OnlineEntriesScreen} />
        <Drawer.Screen name="Services" component={ServicesScreen} />
        <Drawer.Screen name="Booking" component={BookingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
