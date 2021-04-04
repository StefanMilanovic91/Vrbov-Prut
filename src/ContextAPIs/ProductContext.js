import React, { createContext, useState } from 'react';
import { v4 as uuid_v4 } from "uuid";

import { baskets } from '../data/baskets';
import { balloons } from '../data/glass-balloons';
import { bottles } from '../data/glass-bottle';


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState(null);
    const [pickedProduct, setPickedProduct] = useState(null);

    const getPickedProduct = (id) => setPickedProduct(products.entities.articles[id])

    const normalizeState = (arg) => {
        const reformedState = {
            ids: [],
            entities: {
                articles: {}
            }
        };
        arg.forEach(product => {
            let id = uuid_v4();
            reformedState.ids.push(id);
            reformedState.entities.articles[id] = { ...product, id };
        });
        setProducts(reformedState);
    }

    const getProducts = (paramsId) => {
        
        if (paramsId === 'korpe') normalizeState(baskets);
        if (paramsId === 'baloni') normalizeState(balloons)
        if (paramsId === 'flaše') normalizeState(bottles)
    }
    

    return (
        <ProductContext.Provider value={{products, getProducts, getPickedProduct, pickedProduct}} >
            { children }
        </ProductContext.Provider>
    )
}
