import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../../../../../constants/colors';
import Day from '../modules/ForToday/view';
import Week from '../modules/DuringTheWeek/view';

export default function Tabbar() {
  let [tabs, setTabs] = useState([
    {id: 0, title: 'За сегодня', selected: true},
    {id: 2, title: 'За неделю', selected: false},
  ]);

  const tabSelect = index => {
    setTabs(prev =>
      prev.filter((tab, i) => {
        if (i == index) {
          tab.selected = true;
        } else {
          tab.selected = false;
        }
        return tab;
      }),
    );
  };

  return (
    <View>
      <View style={styles.background}>
        {tabs.map((tab, index) => {
          return (
            <View
              style={tabs[index].selected ? styles.box : styles.emptyBox}
              key={tab.id.toString()}>
              <TouchableOpacity onPress={() => tabSelect(index)}>
                <Text
                  style={tabs[index].selected ? styles.text0 : styles.text1}>
                  {tab.title}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.content}>
        {tabs[0].selected && <Day />}
        {tabs[1].selected && <Week />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    // backgroundColor: COLORS.backgroundColorInput,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 10,
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 6,
  },
  box: {
    borderRadius: 25,
    // backgroundColor: COLORS.white,
    // color: COLORS.textBlack,
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 40,
    marginHorizontal: -40,
  },
  text: {
    color: COLORS.textBlack,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  emptyBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgroundColorInput,
    paddingHorizontal: 40,
    marginHorizontal: -40,
    borderRadius: 25,
  },
  text0: {
    color: COLORS.backgroundColorInput,
  },
  text1: {
    color: COLORS.textBlack,
  },
});
