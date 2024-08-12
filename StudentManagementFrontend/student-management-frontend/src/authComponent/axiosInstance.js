// src/utils/axiosInstance.js
import axios from 'axios';
import { getToken, removeToken } from './auth';


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


    if (error.response.status === 403) {
      alert("You are not allow to access this resource ")
      window.location.href = '/login';
    }
    if (error.response.status === 401) {
      alert("Login First")
      removeToken();

      window.location.href = '/login';

      // Handle unauthorized error
      removeToken();
      // Use navigate to redirect to login page



    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
