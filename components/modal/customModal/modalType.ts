
import { FormInstance } from "antd/lib/form";

export type Field = {
    name: string;
    label: string;
    type?: string;
    placeholder?: string;
    optionsFunction?: () => any;
    style?: {};
  };
  
  export type ModalProps = {
    closeModal: (form: any) => void;
    onSave: (data: FormInstance<FormData>) => void;
    fields: Field[];
    contentLabel: string;
    currentItem?: any;
  };
  
  export type FormData = {
    [key: string]: string;
  };
  