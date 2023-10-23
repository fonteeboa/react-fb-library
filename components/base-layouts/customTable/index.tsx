import React, { useState, useEffect } from 'react';
import { Table, Card, Button, Menu, Dropdown, Popconfirm } from 'antd';
import { tableStyle } from './constants';
import type { ColumnsType } from 'antd/es/table';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

interface CustomTableProps<T> {
  dataSource: T[];
  columns: ColumnsType<T>;
  title?: (() => React.ReactNode);
  footer?: (() => React.ReactNode);
  bulkAction?: any[];
  pageTitle?: string;
}

/**
 * Render a custom table component.
 *
 * @param {CustomTableProps<T>} { pageTitle, dataSource, columns, title, footer, bulkAction } - The props for the custom table component.
 * @return {JSX.Element} The rendered custom table component.
 */
const CustomTable = <T extends object>({ pageTitle,  dataSource, columns, title, footer, bulkAction }: CustomTableProps<T>) => {
  
  const { t } = useTranslation();
  
  const [menuVisible, setMenuVisible] = useState(false);
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

  /**
   * Open the menu and set it to be visible.
   *
   * @return {void} No return value.
   */
  const openMenu = () => {
    setMenuVisible(true);
  };

  /**
   * Close the menu by setting the menuVisible state to false.
   *
   * @return {void}
   */
  const closeMenu = () => {
    setMenuVisible(false);
  };

/**
 * Handles the click event for an option.
 *
 * @param {string} option - The option that was clicked.
 * @return {void} This function does not return a value.
 */
  const handleOptionClick = (option: string) => {
    if (bulkAction) {
      const selectedAction = bulkAction.find((item) => item.label === option);
      if (selectedAction) {
        selectedAction.action();
      }
    }
    closeMenu();
  };

  const menu = (
    <Menu onClick={({ key }) => handleOptionClick(key)}>
    {bulkAction &&
      bulkAction.map((item) =>
        item.type && item.type === 'danger' ? (
          <Popconfirm
            title={item.confirmMessage ? item.confirmMessage : item.label}
            onConfirm={() => handleOptionClick(item.label)} // Aqui você lida com a ação após a confirmação
            okText={t('common.ok')} // Texto do botão de confirmação
            cancelText={t('common.cancel')} // Texto do botão de cancelamento
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
            key={item.label}
          >
            <Menu.Item key={item.label}>{item.label}</Menu.Item>
          </Popconfirm>
        ) : (
          <Menu.Item key={item.label}>{item.label}</Menu.Item>
        )
      )}
  </Menu>
  );

  useEffect(() => {
    selectedRowKeys.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true);
  }, [selectedRowKeys]);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  return (
    <Card title={null} className="grid-container">
      <div className="table-header">
        <div className="table-title"><h3>{pageTitle}</h3></div>
        <div className="table-actions">
          <Dropdown overlay={menu} open={menuVisible} onOpenChange={setMenuVisible}>
            <Button type="default" onClick={openMenu} disabled={buttonDisabled}>
              <FontAwesomeIcon icon={faChevronDown} />
            </Button>
          </Dropdown>
        </div>
      </div>
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
    </Card>
  );
};

export default CustomTable;
