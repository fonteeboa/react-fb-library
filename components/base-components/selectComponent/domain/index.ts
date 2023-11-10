import { InputHTMLAttributes } from 'react';
export interface IBox extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    value?: string;
    key?: string;
    label?: string;
    onChange?: (e: any) => void;
    register?: any;
    options?: ISelectOption[];
}

interface ISelectOption {
    value: string;
    label: string;
  }