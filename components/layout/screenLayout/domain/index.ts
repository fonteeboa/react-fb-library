import React, { ReactNode } from 'react';
import { MenuItem } from '../../sidebar/domain';

export interface LayoutProps {
    children: ReactNode;
    menuItems: MenuItem[];
}