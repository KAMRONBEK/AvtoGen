import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {requests} from '../../api/requests';

export const useCatigoriesData = () => {
  const [catigories, setCatigories] = useState([]);
  const navigation = useNavigation();
  const effect = async () => {
    try {
      let res = await requests.categories.getCategories();
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
