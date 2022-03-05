import {useEffect, useState} from 'react';
import {requests} from '../../api/requests';

export const useCatigoriesData = () => {
  const [catigories, setCatigories] = useState([]);
  const effect = async () => {
    try {
      console.log('DSA');
      let res = await requests.categories.getCategories();
      console.log(res.data.data);

      // setCatigories(res.data.data);
      console.log(setCatigories);
    } catch (error) {
      console.error(error);
    }
    useEffect(() => {
      effect();
    }, []);
  };
  return {catigories: effect};
};
