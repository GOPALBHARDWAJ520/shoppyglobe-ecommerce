import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="product-itemcars">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <button 
                onClick={handleAddToCart} 
                className="add-to-cart-button"
            >
                Add to Cart
            </button>
            <Link 
                to={`/product/${product.id}`} 
                className="view-details-link"
            >
                View Details
            </Link>
        </div>
    );
};

export default ProductItem;
