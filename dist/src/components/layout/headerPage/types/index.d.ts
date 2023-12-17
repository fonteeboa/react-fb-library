import { ReactNode } from 'react';
import { Action } from '../../../baseComponents/bulkActionsDropdown/types';
export type HeaderPageProps = {
    children: ReactNode;
    title?: string;
    bulkActions?: Action[];
    showBulkActionOptions?: boolean;
};
