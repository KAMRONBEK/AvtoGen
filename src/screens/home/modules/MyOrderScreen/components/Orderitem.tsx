import React from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Cars} from '../../../../../assets/Icons/Icons';
import {COLORS} from '../../../../../constants/colors';
import feedback from './OrdersList';

export interface RequestsProps {
  text: string;
  adress?: string;
  street?: string;
  town?: string;
  date?: string;
  hour?: string;
  style: StyleProp<ViewStyle>;
}

const FeedbackItem = ({
  street,
  adress,
  text,
  town,
  date,
  hour,
}: typeof feedback[0]) => {
  let textSty = styles.text;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.adress}>
            ул. {street},{adress},{town}
          </Text>
        </View>
        <View style={styles.datecontainer}>
          <View>
            <Text style={styles.date}>Дата посещения</Text>
            <Text>{date}</Text>
          </View>
          <View>
            <Text style={styles.hour}>{hour}</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 2,
          }}
        />
        <View style={styles.datecontainer}>
          <View>
            <Text style={styles.date}>Тип автомобиля</Text>
            <Text>{date}</Text>
          </View>
          <View>
            <Cars />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedbackItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColorInput,
    marginHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textBlack,
  },
  adress: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textBlack,
  },
  textcontainer: {
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
  datecontainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.textBlack,
    marginVertical: 2,
  },
  hour: {
    fontWeight: '600',
    fontSize: 15,
  },
});
