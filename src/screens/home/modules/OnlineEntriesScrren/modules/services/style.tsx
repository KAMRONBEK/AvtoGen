import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorInput,
  },
  back: {
    padding: 30,
  },
  img: {
    width: 325,
    height: 325,
    position: 'absolute',
  },
  img1: {
    width: 210,
    height: 230,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: -15,
    marginBottom: -15,
    paddingHorizontal: 15,
    marginTop: 50,
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textname: {
    width:230,
    fontSize: 22,
    color: COLORS.white,
  },
  textadrees: {
    fontSize: 16,
    color: COLORS.white,
  },
  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  textclock: {
    fontSize: 18,
    color: COLORS.white,
    marginTop: 20,
 },
  text: {
    fontSize: 14,
  },
  container1: {
    marginTop: 30,
    height: 400,
    backgroundColor: COLORS.textBlack,
  },
  agenda: {
    maxHeight: 130,
    backgroundColor: COLORS.textGrey,
  },
  agendaA: {
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: -10,
    marginVertical: 2,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 40,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBell: {
    fontSize: 15,
    color: COLORS.white,
    marginHorizontal: 12,
  },
  button: {
    flexDirection: 'row',
    width: 135,
    paddingVertical: 7,
    borderRadius: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: COLORS.backgroundColorInput,
  },
  containerbox: {
    marginVertical: 30,
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 1,
    marginHorizontal: 40,
    borderRadius: 7,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.backgroundColorIn,
    paddingVertical: 35,
    paddingHorizontal: 20,
  },
  textcol: {
    color: COLORS.white,
    fontSize: 18,
  },
  containerbtn: {
    marginHorizontal: 35,
  },
  textpadd: {
    marginVertical: 10,
  },
});
export default styles;
