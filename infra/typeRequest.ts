export interface RequestConfig {
    headers: {
      'Content-Type': string;
      'Accept': string;
      'Authorization'?: string;
    };
  }

  export type ServiceParams = {
    baseUrl: string;
    route?: string;
    body?: any;
    authToken?: boolean;
  };
  