import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BulkActionsDropdown } from '../../components';
import { mockActions } from '../mock/bulkActions';

const makeRender = (actions = []) => {
    render(<BulkActionsDropdown actions={actions} />);
}

describe('BulkActionsDropdown', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('deve renderizar o botao', () => {
        makeRender()
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('deve renderizar e abrir o menu dropdown', () => {
        render(<BulkActionsDropdown actions={mockActions} />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText('Action 1')).toBeInTheDocument();
        expect(screen.getByText('Dangerous Action')).toBeInTheDocument();
    });

    it('deve chamar a ação do handler ao clicar em um item do menu', () => {
        render(<BulkActionsDropdown actions={mockActions} />);

        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByText('Action 1'));

        expect(mockActions[0].handler).toHaveBeenCalled();
    });

    it('deve exibir o popconfirm e chamar o handler para ação perigosa', () => {
        render(<BulkActionsDropdown actions={mockActions} />);

        fireEvent.click(screen.getByRole('button'));
        fireEvent.click(screen.getByText('Dangerous Action'));

        const popconfirmYesButton = screen.getByText('Yes');
        fireEvent.click(popconfirmYesButton);

        expect(mockActions[1].handler).toHaveBeenCalled();
    });
});
