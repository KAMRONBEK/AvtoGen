import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundColor,
    flex: 1,
  },
  inputcontainer: {
    height: 330,
    justifyContent: 'flex-end',
  },
  button: {
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 1,
    marginHorizontal: 25,
    alignItems: 'center',
    borderRadius: 25,
    paddingVertical: 15,
  },
  text: {
    color: COLORS.white,
  },
  containerButton: {
    height: '37%',
    justifyContent: 'flex-end',
  },
  button1: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },

  buttonTxt: {
    fontSize: 18,
  },
});
export default styles;
