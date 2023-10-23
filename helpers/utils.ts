import moment from 'moment';

export const validFields:any = (value: any, type:any) => {
    switch (type) {
      case 'date':
      case 'scheduled': 
        return moment(value);
        
      default: return value;
    }
  }
  