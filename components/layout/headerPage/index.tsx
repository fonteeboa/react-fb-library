import React from 'react';
import { headerPageProps } from './types';
import BulkActionsDropdown from '../../baseComponents/bulkActionsDropdown';
const HeaderPage: React.FC<headerPageProps> = ({ children, title, bulkActions = [], showBulkActionOptions = true }) => {
  return (
    <> 
      { showBulkActionOptions && 
        <div className="table-header">
            <div className="table-title"><h3>{title}</h3></div>
          <div className="table-actions">        
            { bulkActions.length ? <BulkActionsDropdown actions={bulkActions} /> : null } 
          </div> 
        </div>
      }
      <main className="content">{children}</main>
    </>
  );
};

export default HeaderPage;
