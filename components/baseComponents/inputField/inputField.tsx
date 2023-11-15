import React from 'react';
import { User, Mail, LockClosed, } from "heroicons-react";
import { IInputField } from './types';
import {Input} from 'antd';
const { TextArea } = Input;

/**
 * Generates the input field component for forms.
 *
 * @param {IInputField} props - The props object containing the input field properties.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.type - The type of the input field.
 * @param {React.ReactNode} props.icon - The icon to be displayed with the input field.
 * @param {string} props.label - The label of the input field.
 * @param {Function} props.onChange - The callback function to be executed when the input value changes.
 * @param {string} props.styles - The CSS styles for the input field.
 * @param {Function} props.register - The function to register the input field with a form library.
 * @param {string} props.mask - The mask pattern for the input field.
 * @param {boolean} props.required - Indicates whether the input field is required.
 * @returns {React.ReactNode} - The rendered input field component.
 */
export const InputField: React.FC<IInputField> = ({ name, type, icon, label, onChange, styles, register, mask, required, className, key, ...rest }) => {

    /**
     * Retrieves the appropriate icon based on the provided type.
     *
     * @param {any} type - The type of icon to retrieve.
     * @return {any} The corresponding icon component.
     */
    const getIcon = (type: any) => {
        let icons: any;
        switch (type) {
            case 'email':
                icons = <Mail />
                break;
            case 'password':
                icons = <LockClosed />
                break;
            case 'text':
                icons = <User />
                break;
            default:
                icons = "";
        }

        return icons;
    }
    
    const Icons = icon ? getIcon(type) : "";

    return (
        <div style={type === 'hidden' ? { display: 'none' } : undefined }>
            <label className="block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2" htmlFor={name}>
                <span>{label}{required && <label className="text-red-600 text-sm after:content-['_*']"></label>}</span>
            </label>
            {icon === true && <i className="absolute p-1.5"> {Icons} </i>}
            { type === 'area' ? 
                <TextArea 
                    rows={4} 
                    placeholder={name}
                    data-testid={'dataTestId-' + name}
                    style={{ height: 120, resize: 'none', width: 'auto', ...styles }}
                    className={className}
                    type={type}
                    key={key}
                    id={name}
                    name={name}
                    maxLength={200}
                    onChange={onChange}
                    {...register && ({ ...register(name) })}
                    {...rest}
                    showCount
                />
                :
                <Input
                    data-testid={'dataTestId-' + name}
                    style={{ width: 'auto', ...styles }}
                    className={className}
                    type={type}
                    key={key}
                    id={name}
                    name={name}
                    onChange={onChange}
                    {...register && ({ ...register(name) })}
                    {...rest}
                />
            }
        </div>
    )
}