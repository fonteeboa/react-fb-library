import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, SubMenuItem, SidebarMenuProps } from './domain/types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

/**
 * Renders a sub-menu with the provided sub-menu items.
 *
 * @param {SubMenuItem[]} subMenu - An array of sub-menu items.
 * @param {any} t - A translation function.
 * @return {ReactNode[]} - An array of React elements representing the rendered sub-menu.
 */
function renderSubMenu(subMenu: SubMenuItem[], t: any) {
  return subMenu.map((item) => {
    const { label, icon, subMenu: subSubMenu, route, external } = item;
    const itemIcon = icon ? (
      typeof icon === 'string' ? <i className={icon}></i> : <FontAwesomeIcon icon={icon as IconProp} />
    ) : null;

    if (subSubMenu && subSubMenu.length > 0) {
      return (
        <SubMenu key={label} title={t(label)} icon={itemIcon}>
          {renderSubMenu(subSubMenu, t)}
        </SubMenu>
      );
    } else if (route) {
      return (
        <Menu.Item key={label} icon={itemIcon}>
          {external ? <a href={route} target="_blank" rel="noopener noreferrer"> { t(label) } </a> : <Link to={route}>{t(label)}</Link>}
        </Menu.Item>
      );
    } else {
      return (
        <Menu.Item key={label} icon={itemIcon}>
          {t(label)}
        </Menu.Item>
      );
    }
  });
}

/**
 * Render a menu item component.
 *
 * @param {MenuItem} item - the menu item to render
 * @param {any} t - the translation function
 * @return {JSX.Element} the rendered menu item component
 */
function renderMenuItem(item: MenuItem, t: any) {
  if (item.subMenu && item.subMenu.length > 0) {
    return (
      <SubMenu
        key={item.label}
        title={t(item.label)}
        icon={
          item.icon ? (
            typeof item.icon === 'string' ? (
              <i className={item.icon}></i>
            ) : (
              <FontAwesomeIcon icon={item.icon as IconProp} />
            )
          ) : null
        }
      >
        {renderSubMenu(item.subMenu, t)}
      </SubMenu>
    );
  } else {
    return (
      <Menu.Item key={item.label} icon={item.icon ? <FontAwesomeIcon icon={item.icon as IconProp} /> : null}>
        {t(item.label)}
      </Menu.Item>
    );
  }
}

/**
 * Renders the sidebar menu component.
 *
 * @param {SidebarMenuProps} menuItems - The menu items to be displayed in the sidebar.
 * @return {ReactElement} The rendered sidebar menu component.
 */
const Sidebar: React.FC<SidebarMenuProps> = ({menuItems}) => {
  const { t } = useTranslation();

  return (
    <Menu
      className='Menu'
      defaultSelectedKeys={['common.dashboard']}
      defaultOpenKeys={['common.dashboard']}
      mode="inline"
    >
      {menuItems.map(item => renderMenuItem(item, t))}
    </Menu>
  );
};

export default Sidebar;
