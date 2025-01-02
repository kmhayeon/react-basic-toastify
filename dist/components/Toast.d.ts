import React from 'react';
export type ToastType = 'success' | 'error' | 'info';
export interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
}
declare function Toast({ message, type, duration, onClose }: ToastProps): React.JSX.Element;
export default Toast;
