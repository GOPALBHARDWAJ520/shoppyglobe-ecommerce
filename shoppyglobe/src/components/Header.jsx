import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <header className="header">
            <Link to="/" className="logo">Shoppyglobe</Link>
            <nav className="nav-links">
                <ul>
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/about" className="nav-link">About</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search..." className="search-input" />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="cart-container">
                <Link to="/cart" className="cart-button">
                    <span className="cart-icon">&#128722;</span>
                    {cartItems.length > 0 && (
                        <span className="cart-count">{cartItems.length}</span>
                    )}
                </Link>
            </div>
        </header>
    );
};

export default Header;