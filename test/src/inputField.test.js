import React from 'react';
import { render } from '@testing-library/react';
import {InputField} from '../../components/base-components';
import { inputFieldProps } from '../mock/inputField';

test('Renderiza o componente InputField corretamente', () => {
  const { getByTestId, getByText } = render(<InputField {...inputFieldProps} />);
  
  // Verifique se o componente InputField foi renderizado corretamente
  expect(getByText('Email')).toBeInTheDocument(); 
  expect(getByTestId('dataTestId-' + inputFieldProps.name)).toBeInTheDocument();
  
});
