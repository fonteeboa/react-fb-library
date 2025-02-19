import React from 'react';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { IInputField } from './types';
import { Input } from 'antd';

const { TextArea } = Input;

/**
 * Generates the input field component for forms.
 *
 * @param {IInputField} props - The props object containing the input field properties.
 * @returns {React.ReactNode} - The rendered input field component.
 */
export const InputField: React.FC<IInputField> = ({
   name,
   type,
   icon,
   label,
   onChange,
   styles = {},
   register,
   required,
   className,
   mask,
   ...rest
}) => {

   /**
    * Retrieves the appropriate icon based on the provided type.
    * @param {string} type - The type of icon to retrieve.
    * @returns {React.ReactNode} The corresponding icon component.
    */
   const getIcon = (type?: string): React.ReactNode => {
      switch (type) {
         case 'email':
            return <EnvelopeIcon data-testid={'iconMail'}/>;
         case 'password':
            return <LockClosedIcon data-testid={'iconLockClosed'}/>;
         case 'text':
            return <UserIcon data-testid={'iconUser'}/>;
         default:
            return null;
      }
   };

   const IconComponent = icon ? getIcon(type) : null;
   const registerProps = register ? register(name) : {};

   return (
      <div style={type === 'hidden' ? { display: 'none' } : undefined}>
         <label
            className="block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2"
            htmlFor={name}
         >
            <span>
               {label}
               {required && <span className="text-red-600 text-sm"> *</span>}
            </span>
         </label>
         
         {icon && <i className="absolute p-1.5">{IconComponent}</i>}

         {type === 'area' ? (
            <TextArea
               rows={4}
               placeholder={name}
               data-testid={`dataTestId-${name}`}
               style={{ height: 120, resize: 'none', width: 'auto', ...styles }}
               className={className}
               id={name}
               name={name}
               maxLength={200}
               onChange={onChange}
               {...registerProps}
               {...rest}
               showCount
            />
         ) : (
            <Input
               data-testid={`dataTestId-${name}`}
               style={{ width: 'auto', ...styles }}
               className={className}
               type={type}
               id={name}
               name={name}
               onChange={onChange}
               {...registerProps}
               {...rest}
            />
         )}
      </div>
   );
};
