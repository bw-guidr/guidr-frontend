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
            <main className="footer-contact-info">
                <div className="footer-contact-us">
                    <h3>Contact Us</h3>
                    <p className="footer-contact-email">hello@email.com</p>
                </div>
            </main>
            <div className="footer-copyright">
                Copyright &copy; Guidr
                <p>All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
