
import { FormInstance } from "antd/lib/form";

export type TabContent = {
  fields: Field[];
  contentLabel: string;
  currentItem?: any;
  name : string

}

export type TabContents = {
  [key: number] : TabContent
}

export type FormData = {
  [key: string]: string;
};

export interface MultiModalProps {
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
    
export type ModalProps = {
  closeModal: (form: any) => void;
  onSave: (data: any) => void;
  fields: Field[];
  contentLabel: string;
  currentItem?: any;
};
  
