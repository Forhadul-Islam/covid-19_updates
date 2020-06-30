import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <ul className="navLinks">
                <li><a href="/home">Home</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/doctor">Doctor</a></li>
            </ul>
        </div>
    );
};

export default Navbar;