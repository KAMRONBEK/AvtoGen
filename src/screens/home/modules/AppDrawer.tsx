import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MapsScreen} from './MapsScreen';
import {COLORS} from '../../../constants/colors';
import {MyOrderScreen} from './MyOrderScreen';
import DrawerCostum from './MyOrderScreen/components/DrawerCostum';
import HomeScreen from '../view';
import {OnlineEntriesScreen} from './OnlineEntriesScrren';
import {BookingScreen} from './OnlineEntriesScrren/modules/booking';
import {ROUTES} from '../../../constants/routes';
import {CategoriesScreen} from './Categories';
import { ServicesScreen } from './OnlineEntriesScrren/modules/services';

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
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
      <Drawer.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Drawer.Screen name={ROUTES.CATEGORIES} component={CategoriesScreen} />
      <Drawer.Screen name={ROUTES.MAPS} component={MapsScreen} />
      <Drawer.Screen name="Моизаказы" component={MyOrderScreen} />
      <Drawer.Screen name="Entries" component={OnlineEntriesScreen} />
      <Drawer.Screen name="Services" component={ServicesScreen} />
      <Drawer.Screen name={ROUTES.BOOKING} component={BookingScreen} />
    </Drawer.Navigator>
  );
}
