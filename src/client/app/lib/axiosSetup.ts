import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(config);

  /*
        Add default headers, interceptors etc..
    */

  return axiosInstance;
};
