import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, modifyQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        if (window.confirm(`Are you sure you want to remove ${item.title} from your cart?`)) {
            dispatch(removeFromCart({ id: item.id }));
        }
    };

    const handleQuantityChange = (e) => {
        const quantity = Number(e.target.value);
        if (quantity > 0 && quantity !== item.quantity) {
            dispatch(modifyQuantity({ id: item.id, quantity }));
        } else if (quantity <= 0) {
            e.target.value = item.quantity;
        }
    };

    return (
        <div className="flex justify-between items-center border-b py-2">
            <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: 
                    <input 
                        type="number" 
                        value={item.quantity} 
                        className="w-8 mx-2" 
                        min="1" 
                        onChange={handleQuantityChange} 
                    />
                </p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="flex items-center">
                <button onClick={handleRemove} className="bg-red-500 text-white p-2 rounded">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default CartItem;