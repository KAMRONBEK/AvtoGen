import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {requests} from '../../../../api/requests';

export const useCatigories_2Data = () => {
  const [catigories, setCatigories] = useState([]);
  let route = useRoute();
  const effect = async () => {
    try {
      let res = await requests.categories.getCategories_2(route.params.id);
      setCatigories(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {catigories};
};
