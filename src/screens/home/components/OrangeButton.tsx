import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {IconProps} from '../../../assets/Icons/Icons';
import {COLORS} from '../../../constants/colors';

export interface BlueButtonProps {
  placeholder?: string;
  text?: string;
  Icon?: IconProps;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}

const DefualtInput = ({
  placeholder,
  style,
  text,
  Icon,
  onPress,
}: BlueButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.inputContainer}>
        <View style={styles.icon}>{Icon}</View>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DefualtInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: COLORS.backgroundColorInput,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 30,
    paddingVertical: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '400',
  },
  icon: {
    marginHorizontal: 10,
  },
  textcontainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
