import React, { useState } from 'react';
import { Dropdown, Button, Menu, Popconfirm } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { BulkActionsDropdownProps, Action } from './types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const BulkActionsDropdown: React.FC<BulkActionsDropdownProps> = ({ actions = []}) => {
  const { t } = useTranslation();
  const [menuVisible, setMenuVisible] = useState(false);
  const openMenu = () => {
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const handleActionClick = (action: Action, e: any) => {
    closeMenu();
    
    if (action.handler && e) {
      action.handler(e);
    }
  };
  
  const menu = (
    <Menu>
      {actions.map((action, index) => (
        action.activeAction ?
          action.type && action.type === 'danger' ? (
            <Popconfirm
              title={action.confirmMessage ? action.confirmMessage : action.name}
              onConfirm={(e) => handleActionClick(action, e)}
              okText={t('common.ok')}
              cancelText={t('common.cancel')}
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              key={action.name}
            >
              <Menu.Item key={index} onClick={(e) => handleActionClick(action, e)}>
                {action.name}
              </Menu.Item>
            </Popconfirm>
          ) : (
            <Menu.Item key={index} onClick={(e) => handleActionClick(action, e)}>
              {action.name}
            </Menu.Item>
          )
        : null
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} open={menuVisible} onVisibleChange={setMenuVisible} trigger={['click']}>
      <Button type="default" onClick={openMenu} key="dropdownMenuButton">
        <FontAwesomeIcon icon={faChevronDown} />
      </Button>
    </Dropdown>
  );
};

export default BulkActionsDropdown;
