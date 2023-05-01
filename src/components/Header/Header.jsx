import React from 'react';
import './Header.css';
import logo from '../images/Logo.svg'
const Header = () => {
    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <a href="/login">Login</a>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                </div>
        </nav>
    );
};

export default Header;