export interface Action {
    name: string;
    handler?: (param?: any) => void;
    icon?: string;
    type?: string;
    confirmMessage?: string;
    activeAction?: boolean;
    okText?: string;
    cancelText?: string;
  }
  
  
export interface BulkActionsDropdownProps {
    actions?: Action[];
}
  