import type { ColumnsType } from 'antd/es/table';

export interface CustomTableProps<T> {
    dataSource: T[];
    columns: ColumnsType<T>;
    title?: (() => React.ReactNode);
    footer?: (() => React.ReactNode);
    bulkAction?: any[];
    pageTitle?: string;
  }
  