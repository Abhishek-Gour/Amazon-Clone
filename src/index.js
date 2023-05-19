/* This is a code snippet written in JavaScript that is using React and ReactDOM libraries to render a
React component called `App` to the DOM. It is also using a `StateProvider` component and a
`reducer` function to manage the state of the application. The `ReactDOM.createRoot` method is used
to create a root for the React application and the `root.render` method is used to render the `App`
component inside the root. Additionally, the `reportWebVitals` function is used to measure the
performance of the application. */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { calculateTotal } from './Store/CartSlice';
store.dispatch(calculateTotal())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
