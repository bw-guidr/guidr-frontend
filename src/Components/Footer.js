import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";

function Footer() {
  return (
    <Grid className="footer">
      <Grid.Row columns={1}>
        <Grid.Column className="footer-nav" textAlign="right">
          <NavLink>Home</NavLink>
          <NavLink>Register</NavLink>
          <NavLink>Login</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>News</NavLink>
          <NavLink>Contact</NavLink>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <h3>Contact Us</h3>
          <p className="footer-contact-email">hello@email.com</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>Location</h3>
          <p>
            2019 Lambda Lane <br />
            San Francisco, CA
            <br />
            United States
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>Guidr</h3>
          <p>Build your outdoor resume.</p>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row className="copyright">
        Copyright &copy; Guidr
        <br />
        All rights reserved
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
