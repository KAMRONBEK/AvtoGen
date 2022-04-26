import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/loginScreen';
import {VerifyScreen} from '../screens/auth/verifyScreen';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from '../store/slices/userSlice';
import AppDrawer from '../screens/home/modules/AppDrawer';
import {ROUTES} from '../constants/routes';
import {CategoriesScreen} from '../screens/home/modules/Categories';
import {HomeScreen} from '../screens/home/index';
import {MapsScreen} from '../screens/home/modules/MapsScreen';
import { ServicesScreen } from '../screens/home/modules/OnlineEntriesScrren/modules/services';

const Stack = createNativeStackNavigator();
export const AppRouter = () => {
  const user = useSelector(selectUser);
  console.log(user, 'USER');

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user?.token ? (
          <>
             {/* <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <Stack.Screen
              name={ROUTES.CATEGORIES}
              component={CategoriesScreen}
            />
            <Stack.Screen name={ROUTES.MAPS} component={MapsScreen} />  */}
            <Stack.Screen name="DrawerStack" component={AppDrawer} />

          </>
        ) : (
          <>
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.VERIFY} component={VerifyScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
