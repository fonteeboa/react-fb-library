import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from 'react-modal';
import { ModalFormHandler } from '../../components/baseLayouts/modals/modalFormHandler';
import { mockCloseModal, mockOnSave, mockFields, mockFieldsDoubleLines } from '../mock/modal';
import { setMatchMediaMock } from '../mock/matchMedia';

setMatchMediaMock();
Modal.setAppElement('*');

const makeRender = (fields) => {
  render(
    <ModalFormHandler
      closeModal={mockCloseModal}
      onSave={mockOnSave}
      fields={fields}
      contentLabel="Test Modal"
      currentItem={{}}
    />
  );
}

describe('Modal render', () => {

  it('deve renderizar o modal mockFields', () => {
    makeRender(mockFields);
    expect(screen.getByText('common.name2')).toBeInTheDocument();
    expect(screen.getByText('common.cancel')).toBeInTheDocument();
    expect(screen.getByText('common.save')).toBeInTheDocument();
  });

  it('deve renderizar o modal mockFieldsDoubleLines', () => {
    makeRender(mockFieldsDoubleLines);
    expect(screen.getByText('common.name')).toBeInTheDocument();
    expect(screen.getByText('common.key')).toBeInTheDocument();
    expect(screen.getByText('common.cancel')).toBeInTheDocument();
    expect(screen.getByText('common.save')).toBeInTheDocument();
  });

});

describe('Modal functions', () => {

  it('deve chamar closeModal ao clicar no botão cancelar', () => {
    makeRender(mockFields);
    fireEvent.click(screen.getByText('common.cancel'));
    expect(mockCloseModal).toHaveBeenCalled();
  });

})