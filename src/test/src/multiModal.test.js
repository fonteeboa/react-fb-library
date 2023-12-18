import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from 'react-modal';
import { MultiModalFormHandler } from '../../components/baseLayouts/modals/multiModalFormHandler';
import { mockCloseModal, mockOnSave, tableContentsData } from '../mock/modal';
import { setMatchMediaMock } from '../mock/matchMedia';

setMatchMediaMock();
Modal.setAppElement('*');

const makeRender = () => {
    render(
        <MultiModalFormHandler
            dynamicModals={tableContentsData}
            handleSaveData={mockOnSave}
            closeModal={mockCloseModal}
            pageTitle={'pageTitle'}
        />
    );
}

describe('MultiModalFormHandler', () => {
    it('deve abrir o modal ao clicar no botão "Open Modal"', () => {
        makeRender();
        fireEvent.click(screen.getByText('Open Modal'));
        expect(screen.getByText('pageTitle')).toBeInTheDocument();
      });
    
      it('deve trocar abas corretamente', () => {
        makeRender();
        fireEvent.click(screen.getByText('Open Modal'));
        fireEvent.click(screen.getByText('Tab 2'));
        expect(screen.getByText('common.name2')).toBeInTheDocument(); // Verificar um elemento único da Tab2
      });
    
      it('deve chamar handleSaveData ao submeter o formulário', () => {
        makeRender();
        fireEvent.click(screen.getByText('Open Modal'));
        fireEvent.click(screen.getByText('OK')); // ou o texto do botão que aciona o submit
    
        expect(mockOnSave).toHaveBeenCalled();
      });
    
      it('deve fechar o modal ao clicar no botão de cancelamento', () => {
        makeRender();
        fireEvent.click(screen.getByText('Open Modal'));
        fireEvent.click(screen.getByText('Cancel')); // ou o texto do botão de cancelamento
    
        expect(mockCloseModal).toHaveBeenCalled();
      });
})