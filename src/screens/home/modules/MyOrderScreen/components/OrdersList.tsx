import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import RecomentationItem from './Orderitem';

export let recommendedData = [
  {
    text: 'Truman barbershop',
    adress: '12/1',
    town: 'Tashkent',
    street: 'Лабзак',
    author: 'Pajtim Statovci',
    date: '03.12.2019',
    hour: '16:35',
    Vehicle: 'легковой',
  },
  {
    text: 'Truman barbershop',
    adress: '12/1',
    town: 'Samarqand',
    street: 'Лабзак',
    author: 'Pajtim Statovci',
    date: '03.12.2019',
    hour: '16:35',
    Vehicle: 'легковой',
  },
  {
    text: 'Truman barbershop',
    adress: '12/1',
    town: 'Samarqand',
    street: 'Лабзак',
    author: 'Pajtim Statovci',
    date: '03.12.2019',
    hour: '16:35',
    Vehicle: 'легковой',
  },
  {
    text: 'Truman barbershop',
    adress: '12/1',
    town: 'Tashkent',
    street: 'Лабзак',
    author: 'Pajtim Statovci',
    date: '03.12.2019',
    hour: '16:35',
    Vehicle: 'легковой',
  },
];

const Recommendations = () => {
  return (
    <ScrollView
      style={{
        marginHorizontal: 5,
      }}
      showsHorizontalScrollIndicator={false}>
      {recommendedData.map((e, key) => {
        return <RecomentationItem {...e} key={key} />;
      })}
    </ScrollView>
  );
};

export default Recommendations;
