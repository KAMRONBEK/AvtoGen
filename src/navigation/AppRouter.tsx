import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/loginScreen';
import {VerifyScreen} from '../screens/auth/verifyScreen';
import {HomeScreen} from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';
import MapsStack from '../screens/home/modules/AppDrawer';
import onlineEntriesScreen from '../screens/home/modules/OnlineEntriesScrren/view';
import {ROUTES} from '../constants/routes';
import {useSelector} from 'react-redux';
import {selectUser} from '../store/slices/userSlice';

const Stack = createNativeStackNavigator();
export const AppRouter = () => {
  const user = useSelector(selectUser);
  console.log(user, 'USER');

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user?.token ? (
          <>
            <Stack.Screen name="Maps" component={MapsStack} />
            <Stack.Screen name="Entries" component={onlineEntriesScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.VERIFY} component={VerifyScreen} />
            <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
