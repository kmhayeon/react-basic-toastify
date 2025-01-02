import React, { ReactNode } from 'react';
type ToastContextType = {
    showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
};
export interface ToastProviderProps {
    children: ReactNode;
}
export declare function ToastProvider({ children }: ToastProviderProps): React.JSX.Element;
export declare function useToast(): ToastContextType;
export {};
