import React from 'react';
import { Card } from 'antd';
import { headerPageProps } from './domain';
import BulkActionsDropdown from '../../base-components/bulkActionsDropdown';
const HeaderPageProps: React.FC<headerPageProps> = ({ children, title, bulkActions = [], activeAction = true }) => {
  return (
    <Card title={null} className="grid-container">
        <div className="table-header">
            <div className="table-title"><h3>{title}</h3></div>
          <div className="table-actions">        
            { bulkActions.length ? <BulkActionsDropdown actions={bulkActions} /> : null } 
          </div> 
        </div>
        <main className="content">{children}</main>
    </Card>
  );
};

export default HeaderPageProps;
