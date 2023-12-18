import React from 'react';
import { render, screen } from '@testing-library/react';
import {InputField} from '../../components';

const makeRender = (name, type, icon) => {
  render(<InputField name={name} type={type} icon={icon} label={name} />);
}

describe('InputField', () => {
  it('Renderiza o componente area corretamente', () => {
    makeRender('area', 'area', false)
    expect(screen.getByText('area')).toBeInTheDocument(); 
    expect(screen.getByTestId('dataTestId-area')).toBeInTheDocument();

  });
  
  it('deve renderizar o ícone de email para o tipo email', () => {
    makeRender('email', 'email', true)
    expect(screen.getByTestId('iconMail')).toBeInTheDocument();
  });
  
  it('deve renderizar o ícone de senha para o tipo password', () => {
    makeRender('password', 'password', true)
    expect(screen.getByTestId('iconLockClosed')).toBeInTheDocument();
  });

  it('deve renderizar o ícone de usuário para o tipo text', () => {
    makeRender('username', 'text', true);
    expect(screen.getByTestId('iconUser')).toBeInTheDocument();
  });  
})
