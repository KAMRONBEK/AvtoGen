import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  HomeIcon,
  MenuIcon,
  SearchIcon,
} from '../../../../../assets/Icons/Icons';
import {images} from '../../../../../constants/images';
import {COLORS} from '../../../../../constants/colors';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../../../constants/routes';

const Search = () => {
  const navigation = useNavigation();
  const onMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.img} source={images.Avtogen} />
        <View style={styles.search}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MenuIcon />
          </TouchableOpacity>
          <TextInput style={styles.input} />
          <SearchIcon />
        </View>

        <View style={styles.homeContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
            <HomeIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
  },
  img: {
    width: 180,
    height: 25,
    marginVertical: 10,
  },
  search: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 50,
    width: 330,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  homeContainer: {
    justifyContent: 'flex-end',
    height: 650,
  },
  input: {
    width: 260,
  },
});
