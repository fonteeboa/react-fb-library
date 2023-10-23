import axios, { AxiosResponse } from "axios";
import { RequestConfig, ServiceParams } from "./typeRequest";
import { baseConfig } from "./constantsRequets";

let config = baseConfig;

export const getService = async <T>(params: ServiceParams): Promise<T> => {
  const { baseUrl, route = '', body = {}, authToken = false } = params;
  if (authToken) {
    config = await setTokenAuth(config);
  }
  const url = baseUrl + route;
  return axios.get(url, { ...config, params: body }).then((response: AxiosResponse<T>) => {
    return response.data;
  }).catch(error => {
    console.log(error);
    return [] as T;
  });
};

export const postService = async <T> (params: ServiceParams): Promise<T | boolean> => {
    const { baseUrl, route = '', body = {}, authToken = false } = params;
  if (authToken) {
    config = await setTokenAuth(config);
  }
  const url = baseUrl + route;
  return axios.post(url, body, config).then((response: AxiosResponse<T>) => {
    return response.data;
  }).catch(error => {
    console.log(error);
    return false;
  });
};


export const putService = async <T>(params: ServiceParams): Promise<T | boolean> => {
  const { baseUrl, route = '', body = {}, authToken = false } = params;
  if (authToken) {
    config = await setTokenAuth(config);
  }
  const url = baseUrl + route;
  return axios.put(url, body, config).then((response: AxiosResponse<T>) => {
    return response.data;
  }).catch(error => {
    console.log(error);
    return false;
  });
};


export const deleteService = async <T>(params: ServiceParams): Promise<T | boolean> => {
  const { baseUrl = '', route = '', authToken = false } = params;
  if (authToken) {
    config = await setTokenAuth(config);
  }
  const url = baseUrl + route;
  return axios.delete(url, config).then((response: AxiosResponse<T>) => {
    return response.data;
  }).catch(error => {
    console.log(error);
    return false;
  });
}

export const checkGetRequest = async (params: ServiceParams): Promise<boolean> => {
  const { baseUrl, route = '' } = params;
  try {
    const response = await axios.get(baseUrl + route);
    return response.status === 200;
  } catch (error) {
    console.error("Erro na solicitação GET:", error);
    return false;
  }
};

const setTokenAuth = async (config: RequestConfig): Promise<RequestConfig> => {
  const authToken = await sessionStorage.getItem('authToken');
  if (authToken) {
    config.headers['Authorization'] = 'Bearer ' + authToken;
  }
  return config;
}