import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {SelectComponent} from '../../components/base-components';
import { selectComponentProps } from '../mock/selectComponent';

test('Renderiza o componente SelectComponent corretamente', () => {
  render(<SelectComponent {...selectComponentProps} />);

  // Verifique se o componente SelectComponent foi renderizado corretamente
  expect(screen.getByText('Select an option')).toBeInTheDocument();
});
