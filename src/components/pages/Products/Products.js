import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { baskets } from '../../../data/baskets';
import { balloons } from '../../../data/glass-balloons';
import { bottles } from '../../../data/glass-bottle';

import Product from './Product/Product';

const Products = () => {

    const params = useParams();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if (params.id === 'korpe') setProducts(baskets);
        if (params.id === 'baloni') setProducts(balloons);
        if (params.id === 'flaše') setProducts(bottles);
    }, [params.id]);



    return (
        <main className="Page Products">
            <div className="container">
                <h1 className="second-title">Galerija proizvoda / <span className="second-title__span">{params.id}</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        products && products.map(product => <Product product={product} paramsId={params.id} />)
                    }
                </div>
            </div>
        </main>
    )
}

export default Products
