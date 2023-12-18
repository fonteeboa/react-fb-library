import React, { ErrorInfo, ReactNode } from 'react';
interface ErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}
interface ErrorBoundaryState {
    hasError: boolean;
}
declare class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): ErrorBoundaryState;
    componentDidCatch(error: Error, info: ErrorInfo): void;
    render(): ReactNode;
}
export default ErrorBoundary;
