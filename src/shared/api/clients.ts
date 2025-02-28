import axios, {InternalAxiosRequestConfig} from 'axios';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authClient = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
});

export const privateClient = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
});

privateClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await AsyncStorage.getItem('user_token');
      if (token) {
        if (!config.headers) {
          throw new Error('Headers are not defined');
        }
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('[ERROR] Failed to attach token:', error);
    }
    return config;
  },
);
