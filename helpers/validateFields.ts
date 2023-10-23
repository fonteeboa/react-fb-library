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