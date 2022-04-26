import {useState} from 'react';
import {requests} from '../../../api/requests';
import {LoginRequest} from '../../../api/types';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';

export const useLoginHook = () => {
  const [state, setState] = useState<LoginRequest>({
    device: 12345,
    name: '',
    phone: undefined,
  });
  let [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();
  const handleInputChange = (key: keyof LoginRequest) => (value: string) => {
    setState({...state, [key]: value});
  };
  const login = async () => {
    if (!state.name || !state.phone) {
      return;
    }
    try {
      setLoading(true);
      const res = await requests.auth.login({
        ...state,
        phone: parseInt(state.phone),
      });
      navigation.navigate(ROUTES.VERIFY, {phone: state.phone});
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return {login, handleInputChange, state, loading};
};
