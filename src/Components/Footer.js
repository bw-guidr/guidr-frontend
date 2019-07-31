import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

    return (
        <div>
            <div className="footer-nav">
                <NavLink>Home</NavLink>
                <NavLink>Register</NavLink>
                <NavLink>Login</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>News</NavLink>
                <NavLink>Contact</NavLink>
            </div>
        </div>
    )
}

export default Footer
