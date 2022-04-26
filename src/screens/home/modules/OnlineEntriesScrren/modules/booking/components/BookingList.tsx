import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import RecomentationItem from './Bookingitem';

export let recommendedData = [
  {
    hours: '45',
    title: 'Premium',
  },
  {
    hours: '30',
    title: 'Gold',
  },
  {
    hours: '45',
    title: 'Silver',
  },
  {
    hours: '45',
    title: 'Fade',
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
