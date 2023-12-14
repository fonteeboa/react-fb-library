
import { FormInstance } from "antd/lib/form";
import { FormData } from '../../modalFormHandler/types';

export type TabContent = {
  fields: Field[];
  contentLabel: string;
  currentItem?: any;
  name : string

}

type TabContents = {
  [key: number] : TabContent
}

export interface MultiModalFormHandlerProps {
  dynamicModals: TabContent[];
  pageTitle?: string;
  handleSaveData: (data: FormInstance<FormData>) => void;
  closeModal: (form: any) => void;
}
export type Field = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  optionsFunction?: () => any;
  style?: {};
  doublelines?: Field[];
  rules?: any[];
  required?: boolean;
};
  