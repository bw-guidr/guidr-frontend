import React from "react";
import { NavLink } from "react-router-dom";
import { Grid, GridColumn } from "semantic-ui-react";

function Footer() {
  return (
    <Grid columns={6}>
      <Grid.Row textAlign="right">
        <Grid.Column>
          <NavLink>Home</NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink>Register</NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink>Login</NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink>Blog</NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink>News</NavLink>
        </Grid.Column>
        <Grid.Column>
          <NavLink>Contact</NavLink>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h3>Contact Us</h3>
          <p className="footer-contact-email">hello@email.com</p>
        </Grid.Column>
        <Grid.Column>
          <h3>Location</h3>
          <address>
            2019 Lambda Lane <br />
            San Francisco, CA
            <br />
            United States
          </address>
        </Grid.Column>
        <Grid.Column>
          <h3>Guidr</h3>
          <p>Build your outdoor resume.</p>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        Copyright &copy; Guidr
        <br />
        All rights reserved
      </Grid.Row>
    </Grid>
  );
}

export default Footer;
