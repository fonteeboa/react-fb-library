import React from 'react';
import Sidebar from '../sidebar';
import { LayoutProps } from './types';

/**
 * Renders the screen layout component.
 *
 * @param {LayoutProps} props - The props object containing the children.
 * @return {React.ReactNode} The rendered screen layout component.
 */
const ScreenLayout: React.FC<LayoutProps> = ({ children, menuItems }) => {
   return (
      <div className="layout">
         <Sidebar menuItems={menuItems} />
         <main className="content">{children}</main>
      </div>
   );
};

export default ScreenLayout;
