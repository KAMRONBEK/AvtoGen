import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
  containerimg: {
    flexDirection: 'row',
  },
  img: {
    width: 183,
    height: 183,
    marginLeft: 50,
    marginTop: 40,
  },
  img1: {
    width: 140,
    height: 140,
    marginLeft: -55,
    marginTop: 70,
  },
});
export default styles;
