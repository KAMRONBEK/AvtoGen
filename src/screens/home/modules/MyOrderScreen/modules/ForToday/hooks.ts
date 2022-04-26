import {useEffect, useState} from 'react';
import {requests} from '../../../../../../api/requests';

export const useGetRequest = () => {
  const [order, setOrder] = useState([]);
  const effect = async () => {
    try {
      let res = await requests.order.getRequest();
      setOrder(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    effect();
  }, []);
  return {order};
};
