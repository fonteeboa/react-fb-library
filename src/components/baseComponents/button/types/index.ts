export interface IButton {
    label?: string
    type: "primary" | "link" | "text" | "default" | "dashed" | undefined;
    className?: string;
    color?: "primary" | "default" | "danger" | "blue" | "purple" | "cyan" | "green" | "magenta" | "pink" | "red" | "orange" | "yellow" | "volcano" | "geekblue" | "lime" | "gold";
    styles?: string;
    onClick?: (form : any) => void;
    children?: React.ReactNode;
}