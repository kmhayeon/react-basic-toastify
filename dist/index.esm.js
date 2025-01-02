import React, { useEffect, createContext, useState, useContext } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Toast-module_toast__0quSj {\n    padding: 10px 20px;\n    margin-bottom: 10px;\n    border-radius: 4px;\n    color: white;\n    font-size: 14px;\n    animation: Toast-module_fadeInOut__ljWO7 3s;\n}\n\n.Toast-module_toast__0quSj.Toast-module_success__qWx4x {\n    background-color: #4caf50;\n}\n\n.Toast-module_toast__0quSj.Toast-module_error__dR7a3 {\n    background-color: #f44336;\n}\n\n.Toast-module_toast__0quSj.Toast-module_info__TZ0yE {\n    background-color: #2196f3;\n}\n\n@keyframes Toast-module_fadeInOut__ljWO7 {\n    0% { opacity: 0; }\n    10%, 90% { opacity: 1; }\n    100% { opacity: 0; }\n}\n";
var styles = {"toast":"Toast-module_toast__0quSj","fadeInOut":"Toast-module_fadeInOut__ljWO7","success":"Toast-module_success__qWx4x","error":"Toast-module_error__dR7a3","info":"Toast-module_info__TZ0yE"};
styleInject(css_248z);

function Toast({ message, type = 'info', duration = 3000, onClose }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);
    return (React.createElement("div", { className: `${styles.toast} ${styles[type]}` }, message));
}

const ToastContext = createContext(undefined);
function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);
    const showToast = (message, type = 'info') => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, type }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
    };
    return (React.createElement(ToastContext.Provider, { value: { showToast } },
        children,
        React.createElement("div", { style: { position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 } }, toasts.map((toast) => (React.createElement(Toast, { key: toast.id, message: toast.message, type: toast.type }))))));
}
function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}

export { Toast, ToastProvider, useToast };
//# sourceMappingURL=index.esm.js.map
