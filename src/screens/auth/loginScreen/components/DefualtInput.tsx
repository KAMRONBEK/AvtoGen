import React from 'react';
import {
  StyleSheet,
  View,
  ViewStyle,
  StyleProp,
  GestureResponderEvent,
  TextInput,
} from 'react-native';
import {IconProps, Phone} from '../../../../assets/Icons/Icons';
import {COLORS} from '../../../../constants/colors';

export interface BlueButtonProps {
  placeholder?: string;
  Icon?: React.ReactElement;
  style?: StyleProp<ViewStyle>;
  onChange?: (s: string) => void;
  value?: string;
  boardType?: string;
}

const DefualtInput = ({
  placeholder,
  style,
  Icon,
  onChange,
  value,
  boardType,
}: BlueButtonProps) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>{Icon}</View>
      <View style={styles.border} />
      <TextInput
        maxLength={12}
        keyboardType={boardType}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.white}
        onChangeText={onChange}
      />
    </View>
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
    paddingVertical: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  border: {
    borderWidth: 0.2,
    borderColor: COLORS.white,
    height: 20,
    marginHorizontal: 5,
  },
  input: {
    width: 250,
    fontSize: 16,
    color: COLORS.white,
  },
  icon: {
    marginHorizontal: 3,
  },
});
