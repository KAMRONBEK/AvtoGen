import {useState} from 'react';
import {requests} from '../../../api/requests';
import {VerifyRequest} from '../../../api/types';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTES} from '../../../constants/routes';
import {useDispatch} from 'react-redux';
import {userLoggedIn} from '../../../store/slices/userSlice';

export const useVerifyHook = () => {
  const phone = useRoute().params.phone;
  const [state, setState] = useState<VerifyRequest>({
    device: '1',
    phone: phone,
    code: '',
  });
  const navigation = useNavigation();
  const goBack = navigation.goBack;
  const dispatch = useDispatch();
  const handleInputChange = (key: keyof VerifyRequest) => (value: string) => {
    setState({...state, [key]: value});
  };
  const verify = async () => {
    try {
      console.log({state});

      const res = await requests.auth.verify(state);
      dispatch(userLoggedIn(res.data));
      navigation.navigate(ROUTES.HOME);
    } catch (error) {
      console.error(error);
    }
  };
  return {verify, handleInputChange, state, goBack, phone};
};
