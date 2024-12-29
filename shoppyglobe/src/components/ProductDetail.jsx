import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from '../hooks/useFetchProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const { id } = useParams();
    const { data: products, isLoading: loading, error } = useFetchProducts(`https://dummyjson.com/products/${id}`);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (products) {
            dispatch(addToCart(products));
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching product details: {error.message}</div>;

    if (!products) return <div>No product found</div>;

    return (
        <div>
            <h3>{products.title}</h3>
            <p>${products.price}</p>
            <p>{products.description}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white p-2 rounded" disabled={loading}>
                {loading ? 'Adding...' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductDetail;