import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {requests} from '../../../../api/requests';

export const useListServices = () => {
  const [listservices, setListServices] = useState([]);
  const [locationn, setLocationn] = useState();                                           
  let route = useRoute();
  const navigation = useNavigation();
  const effect = async () => {
    try {
      let res = await requests.service.getListServices(route.params.id);
      console.log(res.data.data,'hook');

      setListServices(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {listservices};
};
