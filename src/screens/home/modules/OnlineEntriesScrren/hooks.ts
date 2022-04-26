import {useState} from 'react';
import {requests} from '../../../../api/requests';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../../../constants/routes';
import {useDispatch} from 'react-redux';
import {EntriesRequest, EntriesResponse} from '../../../../api/types';

export const useEntriesHook = () => {
  const [entries, setEntries] = useState([]);
  const [state, setState] = useState<EntriesRequest>({
    category_id: -1,
    service_id: -1,
    pricelist_id: -1,
    when: '',
    datetime: '',
  });
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const dispatch = useDispatch();
  const handleInputChange = (key: keyof EntriesRequest) => (value: string) => {
    setState({...state, [key]: value});
  };
  const entriess = async () => {
    try {
      const res = await requests.order.getEntries(state);
      console.log(res.data);

      setEntries(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return {entries, handleInputChange, state, goBack};
};
