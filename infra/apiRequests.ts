import axios, { AxiosResponse } from "axios";
import { RequestConfig, ServiceParams } from "./domain";
import { baseConfig } from "./constants";

let config = baseConfig;

/**
 * Retrieves a service from the specified URL with optional authentication.
 *
 * @param {ServiceParams} params - The parameters for retrieving the service.
 * @param {string} params.baseUrl - The base URL of the service.
 * @param {string} [params.route=''] - The route of the service.
 * @param {object} [params.body={}] - The body of the request.
 * @param {boolean} [params.authToken=false] - Whether authentication is required.
 * @returns {Promise<T>} A promise that resolves with the service data.
 */
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

/**
 * Sends a POST request to the specified URL with the given request body.
 *
 * @param {ServiceParams} params - The parameters for the service request.
 * @param {string} params.baseUrl - The base URL for the API.
 * @param {string} [params.route] - The route for the API.
 * @param {object} [params.body] - The request body.
 * @param {boolean} [params.authToken=false] - Whether to include an authentication token.
 * @return {Promise<T | boolean>} - A promise that resolves to the response data or false if there's an error.
 */
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


/**
 * Sends a PUT request to the specified URL with the provided body and returns the response data.
 *
 * @param {ServiceParams} params - The parameters for the service request.
 * @returns {Promise<T | boolean>} The response data or false if an error occurs.
 */
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


/**
 * Deletes a service.
 *
 * @param {ServiceParams} params - The parameters for deleting the service.
 * @param {string} params.baseUrl - The base URL for the service.
 * @param {string} params.route - The route for the service.
 * @param {boolean} params.authToken - Whether an authentication token is required.
 * @return {Promise<T | boolean>} A promise that resolves to the deleted data or a boolean indicating success.
 */
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

/**
 * Checks if a GET request is successful.
 *
 * @param {ServiceParams} params - The parameters for the GET request.
 * @return {Promise<boolean>} - Returns a boolean indicating if the GET request was successful.
 */
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

/**
 * Sets the token authentication for the given request configuration.
 *
 * @param {RequestConfig} config - The request configuration to set the authentication token for.
 * @return {Promise<RequestConfig>} The modified request configuration with the authentication token set, if available.
 */
const setTokenAuth = async (config: RequestConfig): Promise<RequestConfig> => {
  const authToken = await sessionStorage.getItem('authToken');
  if (authToken) {
    config.headers['Authorization'] = 'Bearer ' + authToken;
  }
  return config;
}