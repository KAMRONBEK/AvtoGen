import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  header: {
    marginVertical: 10,
    paddingVertical: 10,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: COLORS.backgroundColorInput,
    borderBottomWidth: 1,
  },
  img: {
    width: 180,
    height: 27,
  },
  backheader: {
    marginHorizontal: 45,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 10,
    marginTop: -5,
    fontSize: 23,
    color: COLORS.white,
  },
});
export default styles;
