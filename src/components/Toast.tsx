import React from 'react';
import styles from '../styles/Toast.module.css';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: string;
  type?: ToastType;
  onClose?: () => void;
  showCloseButton?: boolean;
}

function Toast({ message, type = 'info', onClose, showCloseButton = true }: ToastProps) {
  return (
    <div className={`${styles.toast} ${styles[type]}`} role="alert">
      <span className={styles.message}>{message}</span>
      {showCloseButton && (
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close Toast"
          title="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
}

export default Toast;
