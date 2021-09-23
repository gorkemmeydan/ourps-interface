import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DAppProvider } from '@usedapp/core';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
