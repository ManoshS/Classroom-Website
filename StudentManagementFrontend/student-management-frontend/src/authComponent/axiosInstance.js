// src/utils/axiosInstance.js
import axios from 'axios';
import { getToken, removeToken } from './auth';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',  // Replace with your API URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized error
      removeToken();
      // Use navigate to redirect to login page
      const navigate = useNavigate();
      navigate('/login');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
