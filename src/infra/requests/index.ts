import { ServiceParams } from "./domain";

const setTokenAuth = async (headers: Headers): Promise<Headers> => {
   const authToken = await sessionStorage.getItem('authToken');
   if (authToken) {
       headers.set('Authorization', 'Bearer ' + authToken);
   }
   return headers;
}

async function makeFetchRequest<T>(params: ServiceParams, method: string): Promise<T | boolean> {
   const { baseUrl, route = '', body, authToken, headers: customHeaders } = params;
   const url = method === 'GET' && body ? new URL(baseUrl + route, body) : baseUrl + route;

   let headers = new Headers(customHeaders);

   if (method !== 'GET') {
       headers.append("Content-Type", "application/json");
   }
   headers.append("Accept", "application/json");

   if (authToken) {
       headers = await setTokenAuth(headers);
   }

   const requestOptions: RequestInit = {
       method: method,
       headers: headers,
       body: method !== 'GET' ? JSON.stringify(body) : null
   };

   try {
       const response = await fetch(url, requestOptions);

       if (!response.ok) {
           console.error('HTTP error:', response.status);
           return false;
       }

       return method !== 'GET' ? await response.json() as T : true as unknown as T;
   } catch (error) {
       console.error(`Error in ${method} request:`, error);
       return false;
   }
}

export const getService = async <T>(params: ServiceParams): Promise<T | boolean> => {
   return makeFetchRequest<T>(params, 'GET');
};

export const postService = async <T>(params: ServiceParams): Promise<T | boolean> => {
   return makeFetchRequest<T>(params, 'POST');
};

export const putService = async <T>(params: ServiceParams): Promise<T | boolean> => {
   return makeFetchRequest<T>(params, 'PUT');
};

export const deleteService = async <T>(params: ServiceParams): Promise<T | boolean> => {
   return makeFetchRequest<T>(params, 'DELETE');
};

export const checkGetRequest = async (params: ServiceParams): Promise<boolean> => {
   return makeFetchRequest<boolean>(params, 'GET');
};
