import React, { useContext, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { ProductContext } from '../../../ContextAPIs/ProductContext';

import Product from './Product/Product';

const Products = () => {

    const params = useParams();
    const { products, getProducts, getPickedProduct } = useContext(ProductContext);

    useEffect(() => {
        getProducts(params.id);
    }, [params.id]);

    return (
        <main className="Page Products">
            <div className="container">
                <h1 className="second-title">Galerija proizvoda / <span className="second-title__span">{params.id}</span></h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        products && products.ids.map(id => <Product getPickedProduct={getPickedProduct} key={id} product={products.entities.articles[id]} paramsId={params.id} />)
                    }
                </div>
            </div>
        </main>
    )
}

export default Products
