import React from 'react';
import { useHistory, useParams } from "react-router-dom";

const Products = () => {

    const params = useParams();
    return (
        <main className="Page Products">
            <div className="container">
                <h1 className="second-title">Galerija proizvodi / <span className="second-title__span">{params.id}</span></h1>
            </div>
        </main>
    )
}

export default Products
