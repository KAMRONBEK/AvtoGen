import React, {useState} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Cars} from '../../../../../../../assets/Icons/Icons';
import {COLORS} from '../../../../../../../constants/colors';
import feedback from './BookingList';

export interface RequestsProps {
  title?: string;
  hours?: string;
}

const FeedbackItem = ({title, hours}: typeof feedback[0]) => {
  const [hidePass, setHidePass] = useState();

  return (
    <View>
      <View style={styles.row01}>
        <View>
          <Text style={styles.rate}>{title}</Text>
          <Text style={styles.hours}>{hours} min</Text>
        </View>
        <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
          {hidePass ? (
            <View style={styles.containerbutton}>
              <Text style={styles.textvib}>Выбрать</Text>
            </View>
          ) : (
            <View style={styles.containerbutton1}>
              <Text style={styles.textvib}>Выбрать</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeedbackItem;

const styles = StyleSheet.create({
  row01: {
    borderBottomWidth: 2,
    borderBottomColor: '#6C6C6C',
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 7,
    justifyContent: 'space-between',
  },
  rate: {
    fontSize: 14,
    color: COLORS.white,
  },
  hours: {
    fontSize: 12,
    marginTop: 1,
    marginBottom: 4,
    color: COLORS.white,
  },
  containerbutton: {
    backgroundColor: COLORS.backgroundColorInput,
    paddingVertical: 2,
    marginVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 50,
  },
  containerbutton1: {
    // backgroundColor: COLORS.backgroundColorInput,
    paddingVertical: 2,
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 2,
    marginVertical: 3,
    // marginTop: -2,
    paddingHorizontal: 11,
    borderRadius: 50,
  },
  textvib: {
    color: COLORS.white,
    fontSize: 15,
  },
});
