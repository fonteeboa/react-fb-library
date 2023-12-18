import React from 'react';
import { render } from '@testing-library/react';
import ScreenLayout from '../../components/layout/screenLayout';

describe('ScreenLayout', () => {
  it('deve renderizar o layout da tela com sidebar e conteúdo', () => {
    const { getByText } = render(
      <ScreenLayout menuItems={[]}>
        <div>Conteúdo principal</div>
      </ScreenLayout>
    );

    // Verifica se o conteúdo principal foi renderizado
    expect(getByText('Conteúdo principal')).toBeInTheDocument();
  });
});
