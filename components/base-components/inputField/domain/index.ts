import { InputHTMLAttributes } from 'react';

export interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    type?: string,
    icon?: boolean,
    label?: string,
    styles?: [],
    register?: any,
    mask?: "cep" | "currency" | "cpf" | "cnpj" | "phone" | "cell" | "serie" | "license"
    dataTestId?: string
    onChange?: (e: any) => void
}
