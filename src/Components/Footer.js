import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

function Footer() {

    return (
        <Grid>
            <Grid.Row className="footer-nav">
                <NavLink>Home</NavLink>
                <NavLink>Register</NavLink>
                <NavLink>Login</NavLink>
                <NavLink>Blog</NavLink>
                <NavLink>News</NavLink>
                <NavLink>Contact</NavLink>
            </Grid.Row>
            <Grid.Row className="footer-contact-info">
                <div className="footer-contact-us">
                    <h3>Contact Us</h3>
                    <p className="footer-contact-email">hello@email.com</p>
                </div>
                <div className="footer-location">
                    <h3>Location</h3>
                    <address>2019 Lambda Lane <br />San Francisco, CA<br />United States</address>
                </div>
                <div className="footer-business-name">
                    <h3>Guidr</h3>
                    <p>Build your outdoor resume.</p>
                </div>
            </Grid.Row>
            <Grid.Row className="footer-copyright">
                Copyright &copy; Guidr
                <p>All rights reserved</p>
            </Grid.Row>
        </Grid>
    )
}

export default Footer
