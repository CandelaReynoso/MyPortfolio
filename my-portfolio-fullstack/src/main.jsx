import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter de react-router-dom
import App from './App.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
