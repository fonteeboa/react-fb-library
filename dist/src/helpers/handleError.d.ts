/**
 * Handles error messages based on the status code and error object.
 *
 * @param {number} status - The status code of the error.
 * @param {Error | null} error - The error object or null.
 * @return {void} - This function does not return a value.
 */
export declare function useHandleErrorMessage(): (status: number, error: Error | null) => import("antd/es/message/interface").MessageType;
