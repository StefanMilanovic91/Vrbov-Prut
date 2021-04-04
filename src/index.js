import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { ModalProvider } from './ContextAPIs/ModalContext';
import { ProductProvider } from './ContextAPIs/ProductContext';

import App from './App';
import './css/main.css'
import './css/bootstrap-grid.css'

ReactDOM.render(
    <BrowserRouter>
        <ProductProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </ProductProvider>
    </BrowserRouter>,
document.querySelector('#root'));