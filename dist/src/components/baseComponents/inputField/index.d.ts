import React from 'react';
import { IInputField } from './types';
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
export declare const InputField: React.FC<IInputField>;
