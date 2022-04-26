import axios from 'axios';
import store from '../store/configureStore';
import {
  EntriesRequest,
  EntriesResponse,
  LoginRequest,
  LoginResponse,
  VerifyRequest,
  VerifyResponse,
} from './types';
export const url = 'https://avtogen.icondigital.uz/api';

export const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(e => {
  let token = store.getState().user?.token;
  if (!!token) {
    e.headers = {...e.headers, Authorization: `Bearer ${token}`};
  }
  return e;
});

export const requests = {
  auth: {
    login: (data: LoginRequest) =>
      axiosInstance.post<LoginResponse>('/auth/login', data),
    verify: (data: VerifyRequest) =>
      axiosInstance.post<{data: VerifyResponse}>('/auth/verify', data),
  },
  categories: {
    getCategories: () => axiosInstance.get('/categories/get'),
    getCategories_2: (id: number) =>
      axiosInstance.get('/categories/get', {
        params: {
          category_id: id,
        },
      }),
  },
  service: {
    getListServices: (id: number) =>
      axiosInstance.get(`/categories/${id}/services/get`),
      
    getServices: (category_id: number, service_id : number) =>
      axiosInstance.get(`/categories/${category_id}/services/get/${service_id}`),  
  },

  order: {
    getRequest: () =>
      axiosInstance.get(
        '/request/get?date_from=27.01.2022 00:40&date_to=27.01.2022 09:21',
      ),
    getEntries: (data: EntriesRequest) =>
      axiosInstance.post<{data: EntriesResponse}>('/request/create', data),
  },
};
