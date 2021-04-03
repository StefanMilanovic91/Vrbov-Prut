import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './ContextAPIs/ModalContext';
import App from './App';
import './css/main.css'
import './css/bootstrap-grid.css'

ReactDOM.render(
    <BrowserRouter>
        <ModalProvider>
            <App />
        </ModalProvider>
    </BrowserRouter>,
document.querySelector('#root'));