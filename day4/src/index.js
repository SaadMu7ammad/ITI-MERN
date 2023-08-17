import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// create v tree dom react 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // for making routing
  <BrowserRouter>
    <App />
  </BrowserRouter>

);

