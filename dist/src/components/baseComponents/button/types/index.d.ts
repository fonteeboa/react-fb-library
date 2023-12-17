/// <reference types="react" />
export interface IButton {
    label?: string;
    type: "primary" | "link" | "text" | "default" | "dashed" | undefined;
    className?: string;
    color?: string;
    styles?: string;
    onClick?: (form: any) => void;
    children?: React.ReactNode;
}
