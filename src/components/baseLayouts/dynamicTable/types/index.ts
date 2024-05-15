import type { ColumnsType } from 'antd/es/table';
import { Action } from '../../../baseComponents/bulkActionsDropdown/types';
export { ColumnsType }; 

export interface DynamicTableProps<T> {
  dataSource: T[];
  columns: ColumnsType<T>;
  title?: (() => React.ReactNode);
  footer?: (() => React.ReactNode);
  pageTitle?: string;
  deleteAction?: (selectedRowKeys: T[]) => void;
  openModalAction?: () => void;
  customOptions?: Action[]; 
  rowSelectionBoolean?: boolean;
  showBulkActionOptions?: boolean;
}