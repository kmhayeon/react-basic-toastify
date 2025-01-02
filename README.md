# react-hy-toast-component

A lightweight and customizable toast notification library for React.

## Installation

Install the package via npm or yarn:

```bash
npm install react-hy-toast-component
# or
yarn add react-hy-toast-component
# or
pnpm add react-hy-toast-component
```

## Usage

### Step 1: Wrap your application with `ToastProvider`

The `ToastProvider` is required to enable toast notifications in your application. Wrap it around the root component of
your app.

```jsx
import {ToastProvider} from 'react-hy-toast-component';

export default function App() {
  return (
    <ToastProvider>
      <YourComponent/>
    </ToastProvider>
  );
}
```

### Step 2:Use `useToast` to show notifications

The useToast hook allows you to display toast notifications. Use it inside any child component of the ToastProvider.

```jsx
import {useToast} from 'react-hy-toast-component';

export default function Example() {
  const {showToast} = useToast();
  
  return (
    <div>
      <button onClick={() => showToast('This is a success message!', 'success')}>
        Show Success Toast
      </button>
      <button onClick={() => showToast('This is an error message!', 'error')}>
        Show Error Toast
      </button>
      <button onClick={() => showToast('This is an info message!', 'info')}>
        Show Info Toast
      </button>
    </div>
  );
}
```

## API

### ToastProvider

The `ToastProvider` component is a wrapper for your app to enable toast notifications.

### Props

| Prop Name | Type   | Default      | Description                                                                                      |
|-----------|--------|--------------|--------------------------------------------------------------------------------------------------|
| position  | string | `"top-right"` | Defines where the toast notifications appear. Options: `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`. |


```jsx
<ToastProvider position="bottom-right">
  <YourComponent />
</ToastProvider>
```

### useToast

The `useToast` hook provides methods for displaying toast notifications.

### Methods

| Method                   | Parameters                                                                                   | Description                     |
|--------------------------|-----------------------------------------------------------------------------------------------|---------------------------------|
| `showToast(message, type)` | `message: string`<br>`type: "success" | "error" | "info"`                                  | Displays a toast notification. |


```jsx
const {showToast} = useToast();
showToast('Operation successful!', 'success');
showToast('An error occurred!', 'error');
showToast('Here is some information.', 'info');
```

## Customizing Styles

You can customize the appearance of the toast notifications by overriding CSS variables.

### Default CSS Variables

```
  --toast-background-color: #333;
  --toast-text-color: #fff;
  --toast-success-color: #4caf50;
  --toast-error-color: #f44336;
  --toast-info-color: #2196f3;
```

### Example: Custom Styling

```
  --toast-background-color: #000;
  --toast-text-color: #e0e0e0;
  --toast-success-color: #28a745;
  --toast-error-color: #dc3545;
  --toast-info-color: #007bff;
```

## Complete Example

Here’s how you can use the library in a complete setup:

```jsx
import React from 'react';
import {ToastProvider, useToast} from 'react-hy-toast-component';

function App() {
  return (
    <ToastProvider position="top-right">
      <Example/>
    </ToastProvider>
  );
}

function Example() {
  const {showToast} = useToast();
  
  return (
    <div>
      <button onClick={() => showToast('Success!', 'success')}>Show Success Toast</button>
      <button onClick={() => showToast('Error!', 'error')}>Show Error Toast</button>
      <button onClick={() => showToast('Info!', 'info')}>Show Info Toast</button>
    </div>
  );
}

export default App;
```

## License

This library is licensed under the MIT License. See the LICENSE file for more details.
