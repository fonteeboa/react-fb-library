import type { DynamicTableProps } from './types';
/**
 * Render a custom table component.
 *
 * @param {DynamicTableProps<T>} { pageTitle, dataSource, columns, title, footer, bulkAction } - The props for the custom table component.
 * @return {JSX.Element} The rendered custom table component.
 */
declare const DynamicTable: <T extends object>({ pageTitle, dataSource, columns, title, footer, deleteAction, openModalAction, customOptions, rowSelectionBoolean, showBulkActionOptions }: DynamicTableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default DynamicTable;
