import React from 'react';
import { useParams } from "react-router-dom";

import { baskets } from '../../../data/baskets';
import { balloons } from '../../../data/glass-balloons';
import { bottles } from '../../../data/glass-bottle';

const Products = () => {

    const params = useParams();

    console.log(bottles);
   
    return (
        <main className="Page Products">
            <div className="container">
                <h1 className="second-title">Galerija proizvoda / <span className="second-title__span">{params.id}</span></h1>
            </div>
        </main>
    )
}

export default Products
