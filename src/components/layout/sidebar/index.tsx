import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, SubMenuItem, SidebarMenuProps } from './types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const { SubMenu } = Menu;

/**
 * Renders a sub-menu with the provided sub-menu items.
 *
 * @param {SubMenuItem[]} subMenu - An array of sub-menu items.
 * @param {any} t - A translation function.
 * @return {ReactNode[]} - An array of React elements representing the rendered sub-menu.
 */
function renderSubMenu(subMenu: SubMenuItem[]) {
   return subMenu.map((item, index) => {
      const { label, icon, subMenu: subSubMenu, route, external, linkComponent } = item;
      const itemIcon = icon ? ( typeof icon === 'string' ? <i className={icon}></i> : <FontAwesomeIcon icon={icon as IconProp} /> ) : null;

      if (subSubMenu && subSubMenu.length > 0) {
         return (
            <SubMenu key={'subMenu2'+ index}  title={label} icon={itemIcon} data-testid={index + '-' + label}>
               {renderSubMenu(subSubMenu)}
            </SubMenu>
         );
      } else if (route) {
         return (
            <Menu.Item key={'MenuItem'+ index}  icon={itemIcon} data-testid={index + '-' + label}>
               {external ? <a href={route} target="_blank" rel="noopener noreferrer"> { label } </a> : linkComponent}
            </Menu.Item>
         );
      } else {
         return (
            <Menu.Item key={'MenuItem'+index}  icon={itemIcon} data-testid={index + '-' + label}>
               {label}
            </Menu.Item>
         );
      }
   });
}


function renderMenuItem(item: MenuItem, index: number) {
   if (item.subMenu && item.subMenu.length > 0) {
      return (
         <SubMenu
            key={'SubMenu'+index}
            data-testid={index + '-' + item.label}
            title={item.label}
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
            {renderSubMenu(item.subMenu)}
         </SubMenu>
      );
   } else {
      return (
         <Menu.Item key={'Menu'+index} icon={item.icon ? <FontAwesomeIcon icon={item.icon as IconProp} /> : null} data-testid={index + '-' + item.label}>
            {item.label}
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
const Sidebar: React.FC<SidebarMenuProps> = ({ menuItems }) => {
   return (
      <Menu
         className='Menu'
         defaultSelectedKeys={['0']}
         defaultOpenKeys={['0']}
         mode="inline"
      >
         {menuItems.map((item, index) => renderMenuItem(item, index))}
      </Menu>
   );
};

export default Sidebar;
