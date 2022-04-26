import React, {useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {LoginScreen} from '../../loginScreen';
import {
  // Background,
  // FirstImage,
  Logo,
  // SecondImage,
  // ThirdImage,
  // Title,
} from '../view';

export default function Onboarding() {
  let scrollX = React.useRef(new Animated.Value(0));
  const [hideAll, setHideAll] = useState(false);
  let {width, height} = Dimensions.get('window');

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(39,39,39,1)'}}>
      <Animated.ScrollView
        horizontal={true}
        pagingEnabled
        onMomentumScrollEnd={e => {
          if (e.nativeEvent.contentOffset.x >= width * 3) {
            setHideAll(true);
          } else {
            setHideAll(false);
          }
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX.current}}}],
          {useNativeDriver: true},
        )}>
        <View
          style={{
            width,
            height,
          }}
        />
        <View style={{width, height}} />
        <View style={{width, height}} />
        <View style={{width, height}}>
          <LoginScreen />
        </View>
        {!hideAll && (
          <>
            <Logo scrollX={scrollX.current} />
            {/* <Title scrollX={scrollX.current} /> */}
            {/* <Background scrollX={scrollX.current} /> */}
            {/* <FirstImage scrollX={scrollX.current} /> */}
            {/* <SecondImage scrollX={scrollX.current} /> */}
            {/* <ThirdImage scrollX={scrollX.current} /> */}
          </>
        )}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 110,
  },
  view: {
    backgroundColor: '#F39C12',
    width: 190,
    height: 300,
    marginLeft: 170,
    marginTop: 160,
    borderTopLeftRadius: 29,
  },
  view2: {
    backgroundColor: '#F39C12',
    width: 190,
    height: 400,
    marginLeft: 170,
    borderBottomStartRadius: 29,
  },
  view3: {
    marginTop: 40,
    backgroundColor: '#F39C12',
    width: 190,
    height: 360,
    borderBottomRightRadius: 29,
    borderTopRightRadius: 29,
  },
});
