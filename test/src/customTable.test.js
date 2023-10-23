import React from 'react';
import matchMedia from 'match-media-mock';
import { render, fireEvent, screen } from '@testing-library/react';
import CustomTable from '../../components/base-layouts/customTable';
import '../../i18n/i18n';
import { dataSource, columns, bulkAction } from '../mock/customTable';
// Mock the window.matchMedia function
const originalMatchMedia = window.matchMedia;
const mockMatchMedia = matchMedia.create();

beforeAll(() => {
  window.matchMedia = mockMatchMedia;
});

afterAll(() => {
  window.matchMedia = originalMatchMedia;
});

test('Renderiza o componente CustomTable corretamente', () => {

  render(
    <CustomTable
      pageTitle="Tabela de Usuários"
      dataSource={dataSource}
      columns={columns}
      bulkAction={bulkAction}
    />
  );

  // Verifique a renderização do título da tabela
  expect(screen.getByText('Tabela de Usuários')).toBeInTheDocument();

  // Simule uma seleção de linhas
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Excluir Selecionados')).not.toBeDisabled();

  // Simule uma ação em lote (Excluir Selecionados)
  fireEvent.click(screen.getByText('Excluir Selecionados'));

  // Verifique se a função de ação em lote foi chamada
  expect(bulkAction[0].action).toHaveBeenCalledTimes(1);
});
