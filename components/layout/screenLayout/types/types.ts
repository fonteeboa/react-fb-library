import React, { ReactNode } from 'react';
import { MenuItem } from '../../sidebar/types/types';

export interface LayoutProps {
    children: ReactNode;
    menuItems: MenuItem[];
}