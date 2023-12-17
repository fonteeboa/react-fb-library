// Exportando componentes base e seus tipos, se houver
export type { BulkActionsDropdownProps } from './components/baseComponents/bulkActionsDropdown/types';
export type { IButton as ButtonProps } from './components/baseComponents/button/types';
export type { IInputField as InputFieldProps } from './components/baseComponents/inputField/types';
export type { IBox as SelectComponentProps } from './components/baseComponents/selectComponent/types';
export type { DynamicTableProps } from './components/baseLayouts/dynamicTable/types';
export type { ModalProps } from './components/baseLayouts/modals/types';
export type { MultiModalProps } from './components/baseLayouts/modals/types';
export type { DownloadScreenProps } from './components/layout/downloadScreen/types';
export type { DownloadScreenLoadingProps } from './components/layout/downloadScreenLoading/types';
export type { HeaderPageProps } from './components/layout/headerPage/types';
export type { LayoutProps as ScreenLayoutProps } from './components/layout/screenLayout/types';
export type { SidebarMenuProps as SidebarProps } from './components/layout/sidebar/types';

export { 
    Grid,
    Modal,
    DownloadModuleScreen,
    MultiModal,
    DownloadModuleScreenWL,
    HeaderPage,
    ScreenLayout,
    Sidebar,
    WarningPageScreenSize,
    BulkActionsDropdown,
    Button,
    InputField,
    Select
} from './components';

export {
    ptBR,
    enUS
} from './i18n';