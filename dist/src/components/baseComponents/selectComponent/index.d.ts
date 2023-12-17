import React from 'react';
import { IBox } from './types';
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
export declare const SelectComponent: React.FC<IBox>;
