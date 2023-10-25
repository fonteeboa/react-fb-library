export interface Action {
    name: string;
    handler?: (param?: any) => void;
    icon?: string;
    type?: string;
    confirmMessage?: string;
  }
  
  
export interface BulkActionsDropdownProps {
    actions?: Action[];
    activeAction?: boolean;
}
  