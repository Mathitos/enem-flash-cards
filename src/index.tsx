import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import './index.scss';
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
