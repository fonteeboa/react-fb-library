import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { tableStyle } from './constants';
import type { CustomTableProps } from './domain';
import HeaderPageProps from '../../layout/headerPage';
import { Action } from '../../base-components/bulkActionsDropdown/domain';
import { useTranslation } from 'react-i18next';

/**
 * Render a custom table component.
 *
 * @param {CustomTableProps<T>} { pageTitle, dataSource, columns, title, footer, bulkAction } - The props for the custom table component.
 * @return {JSX.Element} The rendered custom table component.
 */
const CustomTable = <T extends object>({ pageTitle,  dataSource, columns, title, footer, deleteAction, openModalAction, customOptions = [] }: CustomTableProps<T>) => {

  const { t } = useTranslation();

  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const rowSelection = {
    /**
     * Handles the onChange event of the component.
     *
     * @param {React.Key[]} keys - The selected keys.
     * @param {T[]} selectedRows - The selected rows.
     */
    onChange: (keys: React.Key[], selectedRows: T[]) => {
      setSelectedRowKeys(keys);
    },
  };

  const deleteAll = (e: any) => {
    if (deleteAction)
      deleteAction(selectedRowKeys);
  };

  useEffect(() => {
    selectedRowKeys.length > 0 ? setButtonEnabled(true) : setButtonEnabled(false);
  }, [selectedRowKeys]);


  const bulkActionOptions: Action[] = [
    ...customOptions,
    {
      name: t("common.add"),
      handler: openModalAction,
      type: "primary",
    },
    {
      name: t("common.delete.select"),
      handler: deleteAll,
      confirmMessage: t('common.delete.confirmation.multiple'),
      type: "danger",
    },
  ];

  return (
    <HeaderPageProps title={pageTitle} bulkActions={bulkActionOptions} activeAction={buttonEnabled}>
      <Table
        className="top1 alltables75 stayBottom"
        dataSource={dataSource}
        columns={columns}
        size="small"
        pagination={false}
        style={tableStyle}
        bordered
        title={title}
        footer={footer}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />
    </HeaderPageProps>
  );
};

export default CustomTable;
