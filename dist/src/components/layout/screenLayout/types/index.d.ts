import { ReactNode } from 'react';
import { MenuItem } from '../../sidebar/types';
export interface LayoutProps {
    children: ReactNode;
    menuItems: MenuItem[];
}
