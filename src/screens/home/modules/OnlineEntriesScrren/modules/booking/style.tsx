import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColorInput,
  },
  container2: {
    paddingHorizontal: 20,
    marginTop:30,
    paddingTop: 20,
    flex: 2,
    backgroundColor: '#272727',
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
  },
  imgcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textname: {
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
    marginHorizontal: 35,
  },
  text: {
    fontSize: 14,
  },
  container1: {
    height: 410,
    width: 600,
    marginLeft: -100,
    position: 'absolute',
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
  row01: {
    borderBottomWidth: 2,
    borderBottomColor: '#6C6C6C',
    marginHorizontal: 10,
    flexDirection: 'row',
    marginVertical: 7,
    justifyContent: 'space-between',
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
  price: {
    fontSize: 18,
    color: COLORS.white,
  },
  ContainerText: {},
  rate: {
    fontSize: 14,
    color: COLORS.white,
  },
  rate1: {
    fontSize: 15,
    marginVertical: 2,
    color: COLORS.white,
  },
  rate01: {
    fontSize: 20,
    marginVertical: 2,
    marginHorizontal: 15,
    color: COLORS.white,
  },
  hours: {
    fontSize: 12,
    marginTop: 1,
    marginBottom: 4,
    color: COLORS.white,
  },
  containerRate: {},
  containerbutton: {
    backgroundColor: COLORS.backgroundColorInput,
    paddingVertical: 2,
    marginVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 50,
  },
  containerbutton1: {
    // backgroundColor: COLORS.backgroundColorInput,
    paddingVertical: 2,
    borderColor: COLORS.backgroundColorInput,
    borderWidth: 2,
    marginVertical: 3,
    // marginTop: -2,
    paddingHorizontal: 11,
    borderRadius: 50,
  },
  textvib: {
    color: COLORS.white,
    fontSize: 15,
  },
});
export default styles;
