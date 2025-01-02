import React, { ReactNode } from 'react';

type ToastType = 'success' | 'error' | 'info';
interface ToastProps {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
}
declare function Toast({ message, type, duration, onClose }: ToastProps): React.JSX.Element;

type ToastContextType = {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
};
interface ToastProviderProps {
    children: ReactNode;
}
declare function ToastProvider({ children }: ToastProviderProps): React.JSX.Element;
declare function useToast(): ToastContextType;

export { Toast, ToastProvider, useToast };
