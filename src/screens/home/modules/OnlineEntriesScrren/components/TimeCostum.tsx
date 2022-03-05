import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {RefObject, useEffect, useRef} from 'react';
import {BottomIcon, TopIcon} from '../../../../../assets/Icons/Icons';
import {COLORS} from '../../../../../constants/colors';
const TimeCostum = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList);

  const _scrollRef = useRef();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {
    _scrollRef.current.scrollToIndex({
      animated: true,
      index: selectedIndex,
    });
  }, [selectedIndex]);

  const onPressTouch = node => {
    console.log(
      node + selectedIndex,
      '------------------------------------------',
    );
    // if (node + selectedIndex < 47 && node + selectedIndex + node > 0)
    setSelectedIndex(selectedIndex + node);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconcontainer}>
        <TouchableOpacity onPress={() => onPressTouch(-1)}>
          <TopIcon />
        </TouchableOpacity>
        <View style={{paddingVertical: 15}} />
        <TouchableOpacity onPress={() => onPressTouch(1)}>
          <BottomIcon />
        </TouchableOpacity>
      </View>
      <AnimatedFlatlist
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        style={{
          paddingTop: 60,
          marginTop: -20,
          marginLeft: -20,
        }}
        // extraData={[selectedIndex]}
        snapToInterval={70}
        // pagingEnabled
        ref={_scrollRef}
        data={new Array(48).fill('').map((_, i) => (
          <Text style={styles.hours}>
            {String('0' + Math.floor(i / 2)).slice(-2)}:
            {i % 2 == 0 ? '00' : '30'}
          </Text>
        ))}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: animatedValue}}},
        ])}
        renderItem={({item, index}) => {
          let opacity = animatedValue.interpolate({
            inputRange: [(index - 1) * 70, index * 70, (index + 1) * 70],
            outputRange: [0.5, 1, 0.5],
          });
          let scale = animatedValue.interpolate({
            inputRange: [(index - 1) * 70, index * 70, (index + 1) * 70],
            outputRange: [0.5, 1, 0.5],
          });
          return (
            <Animated.View
              style={{
                alignItems: 'center',
                height: 70,
                opacity,
                transform: [{scale}],
              }}>
              {item}
            </Animated.View>
          );
        }}
        showsVerticalScrollIndicator={false}
        onScrollToIndexFailed={error => {
          console.log(error.averageItemLength * error.index);

          _scrollRef.current.scrollToOffset({
            offset: error.averageItemLength * error.index,
            animated: true,
          });
          setTimeout(() => {
            if (_scrollRef.current !== null) {
              _scrollRef.current.scrollToIndex({
                index: error.index > 0 && error.index < 47 ? error.index : 1,
                animated: true,
              });
            }
          }, 100);
        }}
      />
    </View>
  );
};

export default TimeCostum;

const styles = StyleSheet.create({
  hours: {
    fontSize: 40,
    color: COLORS.white,
  },
  container: {
    marginHorizontal: 30,
    height: 170,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconcontainer: {
    marginTop: -35,
    paddingHorizontal: 20,
  },
});
