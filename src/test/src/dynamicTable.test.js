import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid } from '../../components';
import '../../i18n';
import { dataSource, columns, bulkAction } from '../mock/customTable';
import { setMatchMediaMock } from '../mock/matchMedia';

setMatchMediaMock();

test('Renderiza o componente CustomTable corretamente', () => {

  render(
    <Grid
      pageTitle="Tabela de Usuários"
      dataSource={dataSource}
      columns={columns}
      bulkAction={bulkAction}
    />
  );

  // Verifique a renderização do título da tabela
  expect(screen.getByText('Tabela de Usuários')).toBeInTheDocument();
});