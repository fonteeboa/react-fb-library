import moment from 'moment';
import { validFields } from '../../../../helpers/validFields';
import { FormInstance } from "antd/lib/form";

export const setCurrentItemValues = (form: FormInstance, currentItem: any): void => {
  if (typeof currentItem === 'object' && currentItem !== null) {
    Object.keys(currentItem).forEach((key) => {
      form.setFieldsValue({ [key]: validFields(currentItem[key], key) });
    });
  }
};

export const handleFormSubmit = async (form: FormInstance, onSave: (values: any) => void): Promise<void> => {
  try {
    const values = await form.validateFields();
    onSave(values);
  } catch (error) {
    console.error("Erro ao validar campos do formulário:", error);
  }
};

export const setFieldValues = (form: FormInstance, e: any, fieldName: string): void => {
  let value = undefined;
  switch (fieldName) {
    case 'date':
      value = moment(e).format("YYYY-MM-DD HH:mm")
      break;
    default:
      value = e.target? e.target.value : e;
  }
  
  if (value !== undefined) {
    form.setFieldsValue({ [fieldName]: value });
  }
};
