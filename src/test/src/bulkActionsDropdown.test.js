import React from 'react';
import { render, screen } from '@testing-library/react';
import { BulkActionsDropdown } from '../../components';
import '@testing-library/jest-dom';

const makeRender = (actions = []) => {  
    render(
        <BulkActionsDropdown actions={actions} />
    );
}

describe('BulkActionsDropdown', () => {
    // Teste para verificar se o componente renderiza corretamente
    it('renders correctly', () => {
        makeRender()
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});
