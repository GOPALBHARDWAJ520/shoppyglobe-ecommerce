import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        if (window.confirm(`Are you sure you want to remove ${item.name} from your cart?`)) {
            dispatch(removeFromCart(item));
        }
    };

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} onRemove={() => handleRemoveItem(item)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
