import React, { ReactNode } from 'react';
import { MenuItem } from '../../sidebar/domain/types';

export interface LayoutProps {
    children: ReactNode;
    menuItems: MenuItem[];
}