import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface RequestOptions {
  method: string;
  url: string;
  data?: any;
  headers?: Record<string, any>;
  baseUrl: string;
}

class HttpClient {
  private instance: AxiosInstance;

  constructor(instance: AxiosInstance, baseUrl: string, timeout: number = 10000) {
    this.instance = instance;
    this.instance.defaults.baseURL = baseUrl;
    this.instance.defaults.timeout = timeout;
  }

  setHeaders(headers: Record<string, any>): void {
    this.instance.defaults.headers.common = { ...headers };
  }

  async makeRequest<T>({
    method,
    url,
    data,
    headers = {},
  }: RequestOptions): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.instance.request({ method, url, data, headers });
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return Promise.reject(axiosError.response.data);
      } else {
        return Promise.reject(`Request failed: ${axiosError.message}`);
      }
    }
  }
}

export const createHttpClient = (baseUrl: string, timeout?: number, axiosInstance?: AxiosInstance): HttpClient => {
  const instance = axiosInstance || axios.create();
  return new HttpClient(instance, baseUrl, timeout);
};

export const api = {
  request: async <T>(options: RequestOptions, axiosInstance?: AxiosInstance): Promise<T> => {
    return createHttpClient(options.baseUrl, undefined, axiosInstance).makeRequest<T>(options);
  },
};

export default api; // Adicione esta linha se você desejar exportar o módulo como padrão
