import React from 'react';
import { IBox } from './domain';
import { Select } from 'antd';

const { Option } = Select;

/**
 * Renders a select component.
 *
 * @param {IBox} props - The properties for the select component.
 * @param {string} props.name - The name of the select component.
 * @param {string} props.value - The value of the select component.
 * @param {string} props.label - The label for the select component.
 * @param {function} props.onChange - The function to call when the select component value changes.
 * @param {function} props.register - The function to register the select component with a form library.
 * @param {ISelectOption[]} props.options - The array of options to render in the Select.
 * @param {any} props.rest - Any additional properties to spread onto the select component.
 * @return {ReactNode} The rendered select component.
 */
export const SelectComponent: React.FC<IBox> = ({ name, value, label, onChange, register, options = [], key, ...rest }) => {
  return (
    <>
      <label className="block capitalize tracking-wide text-gray-700 text-xs font-normal mb-2" htmlFor={name}><span>{label}</span></label>
      <Select
        data-testid={'dataTestId-' + name}
        name={name}
        key={key}
        id={key}
        value={value}
        onChange={onChange}
        {...register && ({ ...register(name) })}
        {...rest}
        className="w-full"
      >
        {options.length && options.map((option: any) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </>
  );
}
