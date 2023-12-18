import React from 'react';
import { render, screen } from '@testing-library/react';
import {Select} from '../../components';
import { selectComponentProps } from '../mock/selectComponent';

describe('SelectComponent', () => {
  it('Renderiza o componente SelectComponent corretamente', () => {
    render(<Select {...selectComponentProps} />);
  
    // Verifique se o componente SelectComponent foi renderizado corretamente
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
})