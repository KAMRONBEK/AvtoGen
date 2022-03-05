import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../../constants/images';
import {
  BackWIcon,
  BellIcon,
  CheckIcon,
  LIcon,
  MenuIocnVertical,
  RIcon,
} from '../../../../assets/Icons/Icons';
import styles from './style';
import {STRINGS} from '../../../../locales/strings';
import {useNavigation} from '@react-navigation/native';
import {Agenda} from 'react-native-calendars';
import {COLORS} from '../../../../constants/colors';
import DatePicker from 'react-native-date-picker';
import TimeCostum from './components/TimeCostum';
import AppLoader from '../components/AppLoader';
let text = {
  adrees: 'ул. Лабзак, 12/1, Tashkent',
  name: 'Truman Barbershop',
  clock: '9-18',
};

export default function view() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [modalVisible, setModalVisible] = useState(false);

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  return (
    <>
      <View style={styles.container}>
        <View style={styles.HeaderContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <View style={styles.back}>
              <BackWIcon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <MenuIocnVertical />
          </TouchableOpacity>
        </View>
        <View style={styles.imgcontainer}>
          <Image style={styles.img} source={images.BackgroundImg} />
          <Image style={styles.img1} source={images.Chair} />
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Text style={styles.textname}>{text.name}</Text>
            <Text style={styles.textadrees}>{text.adrees}</Text>
          </View>
          <Text style={styles.textclock}>
            {text.clock}
            <Text style={styles.text}>{STRINGS.Hours}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.container1}>
        <Agenda
          style={styles.agenda}
          theme={{
            backgroundColor: COLORS.textBlack,
            calendarBackground: COLORS.textBlack,
            textColor: COLORS.white,
            agendaKnobColor: COLORS.textGrey,
            textDayStyle: {
              color: COLORS.white,
            },
          }}
        />
        <TimeCostum />
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            <BellIcon />
            <Text style={styles.textBell}>{STRINGS.Намопнитьзаминут}</Text>
          </View>
          <View style={styles.row1}>
            <TouchableOpacity onPress={navigation.goBack}>
              <View style={styles.button}>
                <LIcon />
                <Text style={styles.textBell}>{STRINGS.Cancel}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.button}>
                <RIcon />
                <Text style={styles.textBell}>{STRINGS.Next}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <AppLoader /> */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>ваш запрос принят</Text>
              <View style={styles.row2}>
                <Text style={styles.date}>Дата</Text>
                <Text>17.06</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.date}>Время</Text>
                <Text>10.30</Text>
              </View>
              <View style={{marginTop: 20}}>
                <CheckIcon />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}
