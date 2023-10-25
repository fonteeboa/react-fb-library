import React, { ReactNode } from 'react';
import { Action } from '../../../base-components/bulkActionsDropdown/domain'; // Certifique-se de importar o tipo Action

export type headerPageProps = {
    children: ReactNode;
    title?: string;
    bulkActions?: Action[]; 
    activeAction?: boolean;
}