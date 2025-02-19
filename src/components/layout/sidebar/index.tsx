import React from 'react';
import { Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem, SubMenuItem, SidebarMenuProps } from './types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const regex = /\s+/g;
const { SubMenu } = Menu;

function generateKey(prefix: string, index: number, label: string): string {
   const sanitizedLabel = label.replace(regex, '-').toLowerCase();
   const timestamp = Date.now().toString(36);
   const randomString = Math.random().toString(36).substring(2, 10);
   return `${prefix}-${index}-${sanitizedLabel}-${timestamp}-${randomString}`;
}

function renderSubMenu(subMenu: SubMenuItem[], parentKey: string) {
   return subMenu.map((item, index) => {
      const { label, icon, subMenu: subSubMenu, route, external, linkComponent } = item;
      const itemIcon = icon ? ( typeof icon === 'string' ? <i className={icon}></i> : <FontAwesomeIcon icon={icon as IconProp} /> ) : null;
      const itemKey = generateKey(parentKey, index, label);

      if (subSubMenu && subSubMenu.length > 0) {
         return (
            <SubMenu key={itemKey} title={label} icon={itemIcon} data-testid={itemKey}>
               {renderSubMenu(subSubMenu, itemKey)}
            </SubMenu>
         );
      } else if (route) {
         return (
            <Menu.Item key={itemKey} icon={itemIcon} data-testid={itemKey}>
               {external ? <a href={route} target="_blank" rel="noopener noreferrer"> { label } </a> : linkComponent}
            </Menu.Item>
         );
      } else {
         return (
            <Menu.Item key={itemKey} icon={itemIcon} data-testid={itemKey}>
               {label}
            </Menu.Item>
         );
      }
   });
}

function renderMenuItem(item: MenuItem, index: number) {
   const itemKey = generateKey('MainMenu', index, item.label);

   if (item.subMenu.length > 0) {
      return (
         <SubMenu
            key={itemKey}
            data-testid={itemKey}
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
            {renderSubMenu(item.subMenu, itemKey)}
         </SubMenu>
      );
   } else {
      return (
         <Menu.Item key={itemKey} icon={item.icon ? <FontAwesomeIcon icon={item.icon as IconProp} /> : null} data-testid={itemKey}>
            {item.label}
         </Menu.Item>
      );
   }
}

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
