import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type FontAwesomeIconType = IconDefinition | string;

export interface SubMenuItem {
  label: string;
  icon: FontAwesomeIconType | boolean;
  route?: string;
  external?: boolean;
  subMenu?: SubMenuItem[];
}

export interface MenuItem {
  label: string;
  icon: FontAwesomeIconType | string;
  subMenu: SubMenuItem[];
}
