import { FormInstance } from "antd/lib/form";
export declare const setCurrentItemValues: (form: FormInstance, currentItem: any) => void;
export declare const handleFormSubmit: (form: FormInstance, onSave: (values: any) => void) => Promise<void>;
export declare const setFieldValues: (form: FormInstance, e: any, fieldName: string) => void;
