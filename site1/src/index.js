import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Rotas from './routes.js'
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas></Rotas>
  </React.StrictMode>
);


