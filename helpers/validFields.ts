import moment from 'moment';

/**
 * Validates the given value based on the specified type.
 *
 * @param {any} value - The value to be validated.
 * @param {string} type - The type of validation to be performed.
 * @return {any} - The validated value or false if validation fails.
 */
export const validFields = (value: any, type: string): any => {
   switch (type) {
   case 'date':
   case 'scheduled':
      return moment(value).isValid() ? moment(value) : false;
   case 'string':
      return typeof value === 'string' ? value : false;
   case 'number':
      return !isNaN(value) ? Number(value) : false;
   case 'boolean':
      return typeof value === 'boolean' ? value : false;
   case 'array':
      return Array.isArray(value) ? value : false;
   case 'object':
      return typeof value === 'object' && value !== null ? value : false;
   case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? value : false;
   default:
      return value;
   }
};
