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
  
export type FormData = {
  [key: string]: string;
};