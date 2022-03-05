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
  const navigation = useNavigation();
  const handleInputChange = (key: keyof LoginRequest) => (value: string) => {
    setState({...state, [key]: value});
  };
  const login = async () => {
    if (!state.name || !state.phone) {
      return;
    }
    try {
      const res = requests.auth.login({...state, phone: parseInt(state.phone)});
      navigation.navigate(ROUTES.VERIFY, {phone: state.phone});
    } catch (error) {
      console.error(error);
    }
  };
  return {login, handleInputChange, state};
};
