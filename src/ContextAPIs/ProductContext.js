import React, { createContext } from 'react';

import { baskets } from '../data/baskets';
import { balloons } from '../data/glass-balloons';
import { bottles } from '../data/glass-bottle';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    


    return (
        <ProductContext.Provider value={{baskets, balloons, bottles}}>
            {children}
        </ProductContext.Provider>
    )

}