import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LoginResponse} from '../../api/types';
import {RootState} from '../configureStore';

const initialState: LoginResponse | null = null;

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    userLoggedIn: (state, action: PayloadAction<LoginResponse>) => {
      return action.payload;
    },
    userLoggedOut: state => {
      return initialState;
    },
  },
});

export const selectUser = (state: RootState) => state.user;
export const {userLoggedIn, userLoggedOut} = userSlice.actions;
export default userSlice.reducer;
