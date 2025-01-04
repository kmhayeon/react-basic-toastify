# react-basic-toastify

A lightweight and customizable toast notification library for React.

## Installation

Install the package via npm or yarn:

```bash
npm install react-basic-toastify
# or
yarn add react-basic-toastify
# or
pnpm add react-basic-toastify
```

## Usage

### Step 1: Wrap your application with `ToastProvider`

The `ToastProvider` is required to enable toast notifications in your application. Wrap it around the root component of
your app.

```jsx
import {ToastProvider} from 'react-basic-toastify';

export default function App() {
  return (
    <ToastProvider>
      <YourComponent/>
    </ToastProvider>
  );
}
```

### Step 2: Use the `toast` object to show notifications

The toast object provides methods for displaying notifications. You can use it in any child component of the ToastProvider.

```jsx
import { toast } from 'react-basic-toastify';

export default function Example() {
  return (
    <div>
      <button onClick={() => toast.success('This is a success message!')}>
        Show Success Toast
      </button>
      <button onClick={() => toast.error('This is an error message!')}>
        Show Error Toast
      </button>
      <button onClick={() => toast.info('This is an info message!')}>
        Show Info Toast
      </button>
    </div>
  );
}

```

## API

### `ToastProvider`

The `ToastProvider` component is a wrapper for your app to enable toast notifications.

#### Props

| Prop Name | Type   | Default      | Description                                                                                      |
|-----------|--------|--------------|--------------------------------------------------------------------------------------------------|
| position  | string | `"top-right"` | Defines where the toast notifications appear. Options: `"top-left"`, `"top-right"`, `"bottom-left"`, `"bottom-right"`. |

#### Example:
```jsx
<ToastProvider position="bottom-right">
  <YourComponent />
</ToastProvider>
```

<br/>

### `toast Object`

The `toast` object provides methods for displaying toast notifications.

#### Methods

| Method                            | Parameters                                                    | Description                          |
|-----------------------------------|--------------------------------------------------------------|--------------------------------------|
| `toast.success(message, duration, showCloseButton)` | `message: string`, `duration?: number`, `showCloseButton?: boolean` | Displays a success notification.    |
| `toast.error(message, duration, showCloseButton)`   | `message: string`, `duration?: number`, `showCloseButton?: boolean` | Displays an error notification.     |
| `toast.info(message, duration, showCloseButton)`    | `message: string`, `duration?: number`, `showCloseButton?: boolean` | Displays an info notification.      |

#### Parameters

| Parameter         | Type     | Default  | Description                                                        |
|-------------------|----------|----------|--------------------------------------------------------------------|
| `message`         | `string` | (none)   | The text to display in the toast notification.                    |
| `duration`        | `number` | `3000`   | The time in milliseconds before the toast disappears automatically.|
| `showCloseButton` | `boolean`| `true`   | Whether to show the close button in the toast notification.        |

#### Example:

```jsx
import { toast } from 'react-basic-toastify';

toast.success('Operation successful!', 5000, true);
toast.error('An error occurred!', 4000);
toast.info('Here is some information.', 3000, false);
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
import { ToastProvider, toast } from 'react-basic-toastify';

function App() {
  return (
    <ToastProvider position="top-right">
      <Example />
    </ToastProvider>
  );
}

function Example() {
  return (
    <div>
      <button onClick={() => toast.success('Success!', 5000, true)}>
        Show Success Toast
      </button>
      <button onClick={() => toast.error('Error!', 4000, true)}>
        Show Error Toast
      </button>
      <button onClick={() => toast.info('Info!', 3000, false)}>
        Show Info Toast
      </button>
    </div>
  );
}

export default App;
```

## License

This library is licensed under the MIT License. See the LICENSE file for more details.
