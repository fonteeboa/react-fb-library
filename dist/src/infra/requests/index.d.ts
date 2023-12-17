import { ServiceParams } from "./domain";
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
export declare const getService: <T>(params: ServiceParams) => Promise<T>;
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
export declare const postService: <T>(params: ServiceParams) => Promise<boolean | T>;
/**
 * Sends a PUT request to the specified URL with the provided body and returns the response data.
 *
 * @param {ServiceParams} params - The parameters for the service request.
 * @returns {Promise<T | boolean>} The response data or false if an error occurs.
 */
export declare const putService: <T>(params: ServiceParams) => Promise<boolean | T>;
/**
 * Deletes a service.
 *
 * @param {ServiceParams} params - The parameters for deleting the service.
 * @param {string} params.baseUrl - The base URL for the service.
 * @param {string} params.route - The route for the service.
 * @param {boolean} params.authToken - Whether an authentication token is required.
 * @return {Promise<T | boolean>} A promise that resolves to the deleted data or a boolean indicating success.
 */
export declare const deleteService: <T>(params: ServiceParams) => Promise<boolean | T>;
export declare const deleteWithBodyService: <T>(params: ServiceParams) => Promise<boolean | T>;
/**
 * Checks if a GET request is successful.
 *
 * @param {ServiceParams} params - The parameters for the GET request.
 * @return {Promise<boolean>} - Returns a boolean indicating if the GET request was successful.
 */
export declare const checkGetRequest: (params: ServiceParams) => Promise<boolean>;
