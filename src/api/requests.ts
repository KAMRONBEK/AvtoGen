import axios from 'axios';
import {
  LoginRequest,
  LoginResponse,
  VerifyRequest,
  VerifyResponse,
} from './types';
export const url = 'https://avtogen.icondigital.uz/api';

export const axiosInstance = axios.create({
  baseURL: url,
});

// axiosInstance.interceptors.request.use(e => {
//   let token = store.getState().user.token;
//   if (!!token) {
//     e.headers = {...e.headers, Authorization: `Bearer ${token}`};
//   }
//   return e;
// });

export const requests = {
  auth: {
    login: (data: LoginRequest) =>
      axiosInstance.post<LoginResponse>('/auth/login', data),
    verify: (data: VerifyRequest) =>
      axiosInstance.post<VerifyResponse>('/auth/verify', data),
  },
  categories: {
    getCategories: () => axiosInstance.get('/categories/get'),
  },
};
