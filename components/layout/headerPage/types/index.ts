import React, { ReactNode } from 'react';
import { Action } from '../../../baseComponents/bulkActionsDropdown/types'; // Certifique-se de importar o tipo Action

export type headerPageProps = {
    children: ReactNode;
    title?: string;
    bulkActions?: Action[]; 
    activeAction?: boolean;
}