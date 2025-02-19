import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Grid } from '../../components';
import { dataSource, columns, bulkAction, mockDeleteAction, mockOpenModalAction } from '../mock/grid';
import { setMatchMediaMock } from '../mock/matchMedia';

setMatchMediaMock();

const makeRender = (rowSelectionBoolean = false) => {
  render(
    <Grid
      pageTitle="Tabela de Usuários"
      dataSource={dataSource}
      columns={columns}
      bulkAction={bulkAction}
      deleteAction={mockDeleteAction}
      openModalAction={mockOpenModalAction}
      rowSelectionBoolean={rowSelectionBoolean}
    />
  );
}
describe('Grid', () => {

  it('Renderiza o componente Grid corretamente', () => {
    makeRender();
    // Verifique a renderização do título da tabela
    expect(screen.getByText('Tabela de Usuários')).toBeInTheDocument();
  });
  
  it('deve selecionar linhas e atualizar o botão de ação em massa', () => {
    makeRender(true);
  
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]); // Selecionar todas as linhas

    expect(checkboxes[1]).toBeChecked(); // Verifica se a primeira linha está selecionada
    expect(checkboxes[2]).toBeChecked(); 
  });
  
  it('deve chamar deleteAction com linhas selecionadas', () => {
    makeRender(true)
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    fireEvent.click(screen.getAllByRole('button')[0]);
    fireEvent.click(screen.getByText('Delete'));
    expect(mockDeleteAction).toHaveBeenCalledWith(dataSource);
  });

});  


