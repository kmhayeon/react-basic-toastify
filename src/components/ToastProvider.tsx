import React, { useState, ReactNode, useEffect } from 'react';
import Toast from './Toast';
import styles from '../styles/ToastProvider.module.css';

type ToastType = 'success' | 'error' | 'info';

interface ToastData {
  id: number;
  message: string;
  type: ToastType;
  duration: number;
  showCloseButton: boolean;
}

type ToastFunction = (
  message: string,
  duration?: number,
  showCloseButton?: boolean
) => void;

export const toast = {
  success: (() => {}) as ToastFunction,
  error: (() => {}) as ToastFunction,
  info: (() => {}) as ToastFunction,
};

export interface ToastProviderProps {
  children: ReactNode;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

export function ToastProvider({ children, position = 'top-right' }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const createToast = (type: ToastType) => (
    message: string,
    duration = 3000,
    showCloseButton = true
  ) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, duration, showCloseButton }]);
    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, duration);
    }
  };

  useEffect(() => {
    toast.success = createToast('success');
    toast.error = createToast('error');
    toast.info = createToast('info');
  }, []);

  const getPositionClass = () => {
    switch (position) {
      case 'top-left':
        return styles.topLeft;
      case 'top-center':
        return styles.topCenter;
      case 'top-right':
        return styles.topRight;
      case 'bottom-left':
        return styles.bottomLeft;
      case 'bottom-center':
        return styles.bottomCenter;
      case 'bottom-right':
        return styles.bottomRight;
      default:
        return styles.topRight;
    }
  };

  return (
    <>
      {children}
      <div className={`${styles.toastContainer} ${getPositionClass()}`}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            showCloseButton={toast.showCloseButton}
            onClose={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
          />
        ))}
      </div>
    </>
  );
}
