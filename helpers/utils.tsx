import moment from 'moment';

/**
 * Validates and processes the given value based on the specified type.
 *
 * @param {any} value - The value to be validated and processed.
 * @param {any} type - The type of the value.
 * @return {any} - The processed value.
 */
export const validFields:any = (value: any, type:any) => {
  switch (type) {
    case 'date':
    case 'scheduled': 
      return moment(value);
      
    default: return value;
  }
}

/**
 * Checks the availability of a microservice by making a request to the specified base URL.
 *
 * @param {string} baseUrl - The base URL of the microservice.
 * @return {Promise<boolean>} A boolean indicating whether the microservice is available or not.
 */
export const checkMicroservice = async (baseUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(baseUrl);
    return response.ok ? true : false;
  } catch (error) {
    console.log('Error checking microservice availability:', baseUrl);
    return false;
  }
};
