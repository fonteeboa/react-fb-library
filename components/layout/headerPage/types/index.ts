import { ReactNode } from 'react';
import { Action } from '../../../baseComponents/bulkActionsDropdown/types'; // Certifique-se de importar o tipo Action

export type HeaderPageProps = {
    children: ReactNode;
    title?: string;
    bulkActions?: Action[];
    showBulkActionOptions?: boolean;
}