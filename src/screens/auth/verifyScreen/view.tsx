import OTPInputView from '@twotalltotems/react-native-otp-input';
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {BackIcon} from '../../../assets/Icons/Icons';
import {STRINGS} from '../../../locales/strings';
import styles from './style';
import {useVerifyHook} from './hooks';

export default function VerifyView() {
  const {verify, handleInputChange, state, goBack, phone} = useVerifyHook();
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View>
          <TouchableOpacity onPress={goBack}>
            <BackIcon />
          </TouchableOpacity>
          <Text style={styles.title}>{STRINGS.Verify}</Text>
          <Text style={styles.number}>
            {STRINGS.WehavesentanOTPonyournumber},{phone}
          </Text>
        </View>
        <OTPInputView
          onCodeChanged={handleInputChange('code')}
          style={styles.inputView}
          pinCount={4}
          autoFocusOnLoad={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          code={state.code}
          onCodeFilled={handleInputChange('code')}
        />
        {state.code.length == 4 ? (
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={verify}>
              <View style={styles.button}>
                <Text style={styles.text}>{STRINGS.Register}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
}
