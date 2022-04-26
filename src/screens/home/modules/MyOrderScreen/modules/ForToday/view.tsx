import {View, Text} from 'react-native';
import React from 'react';
import Orderitem from '../../components/Orderitem';
import {useGetRequest} from './hooks';

export default function view() {
  const {order} = useGetRequest();
  return (
    <View>
      {/* {order.map(e => {
        return <Orderitem />;
      })} */}
    </View>
  );
}
