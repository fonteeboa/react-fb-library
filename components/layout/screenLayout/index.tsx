import React from 'react';
import Sidebar from '../sidebar';
import { LayoutProps } from './screenLayout';

/**
 * Renders the screen layout component.
 *
 * @param {LayoutProps} props - The props object containing the children.
 * @return {React.ReactNode} The rendered screen layout component.
 */
const ScreenLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};

export default ScreenLayout;
