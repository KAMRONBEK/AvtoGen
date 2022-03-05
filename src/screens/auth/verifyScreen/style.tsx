import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: COLORS.backgroundColor,
  },
  containerTitle: {
    marginVertical: 25,
    marginTop: 50,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  underlineStyleBase: {
    width: 70,
    marginHorizontal: 5,
    height: 70,
    fontSize: 30,
    borderRadius: 10,
    color: COLORS.backgroundColorInput,
    borderWidth: 1,
    borderColor: COLORS.backgroundColorInputVerify,
    backgroundColor: COLORS.backgroundColorInputVerify,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.backgroundColorInput,
  },
  title: {
    marginTop: 50,
    fontSize: 50,
    color: COLORS.backgroundColorInput,
  },
  number: {
    color: COLORS.white,
    fontSize: 16,
    marginVertical: 10,
  },
  button: {
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 1,
    // marginHorizontal:25,
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 15,
  },
  text: {
    color: COLORS.white,
  },
  containerButton: {
    height: '45.2%',
    justifyContent: 'flex-end',
  },
  inputView: {
    width: '50%',
    marginLeft: 10,
    height: 200,
  },
});
export default styles;
