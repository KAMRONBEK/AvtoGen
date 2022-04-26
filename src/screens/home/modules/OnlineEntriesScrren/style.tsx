import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants/colors';

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
    marginTop: 5,
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
  row2: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textBell: {
    fontSize: 15,
    color: COLORS.white,
    marginHorizontal: 12,
  },
  date: {
    fontSize: 15,
    marginRight: 120,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalText: {
    fontSize: 24,
    color: COLORS.textBlack,
    borderBottomColor: COLORS.textGrey,
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  modalView: {
    backgroundColor: 'white',
    borderBottomColor: COLORS.textGrey,
    borderBottomWidth: 0.5,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default styles;
