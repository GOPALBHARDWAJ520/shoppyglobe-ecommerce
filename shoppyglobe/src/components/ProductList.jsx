import React from 'react';
import { products } from '../products_updated';
import ProductItem from './ProductItem_updated';

const ProductList = () => {
    return (
        <div className="card">
            <h2>Product List</h2>
            <div className="">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};


export default ProductList;