import React, { createContext } from 'react';
import { baskets } from '../data/baskets';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    

    return (
        <ProductContext.Provider value={} >
            { children }
        </ProductContext.Provider>
    )
}
