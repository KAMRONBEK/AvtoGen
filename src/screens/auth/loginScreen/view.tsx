import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import HeaderImg from '../../../components/general/HeaderImg';
import {Phone, UserIcon} from '../../../assets/Icons/Icons';
import {STRINGS} from '../../../locales/strings';
import DefualtInput from './components/DefualtInput';
import {useLoginHook} from './hooks';

export default function view() {
  const {login, handleInputChange, state} = useLoginHook();

  return (
    <View style={styles.container}>
      <HeaderImg />
      <View style={styles.inputcontainer}>
        <DefualtInput
          onChange={handleInputChange('name')}
          Icon={<UserIcon />}
          placeholder={STRINGS.NAME}
          value={state.name}
        />
        <DefualtInput
          onChange={handleInputChange('phone')}
          boardType="number-pad"
          value={state.phone?.toString()}
          Icon={<Phone />}
          placeholder={STRINGS.PhoneNumber}
        />
      </View>
      <View style={styles.containerButton}>
        {state.phone?.toString().length == 12 ? (
          <TouchableOpacity onPress={login}>
            <View style={styles.button}>
              <Text style={styles.text}>{STRINGS.Register}</Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
}
