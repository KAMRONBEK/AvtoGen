import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {requests} from '../../../../../api/requests';

export const useServices = () => {
  const [services, setServices] = useState([]);
  let route = useRoute();
  const navigation = useNavigation();
  const effect = async () => {
    try {
      let res = await requests.service.getServices(route.params.category_id, route.params.service_id);
      console.log(services);
    

      setServices(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {services};
};
