import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "semantic-ui-react";

function Footer() {
  return (
    <Grid className="footer">
      <Grid.Row columns={1}>
        <Grid.Column className="footer-nav" textAlign="right">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/signup">Register</NavLink>
          <NavLink exact to="/login">Login</NavLink>
          <NavLink exact to="/">Blog</NavLink>
          <NavLink exact to="/">News</NavLink>
          <NavLink exact to="/">Contact</NavLink>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={8}>
          <h3>CONTACT US</h3>
          <p className="footer-contact-email">hello@email.com</p>
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>LOCATION</h3>
          <p>
            2019 Lambda Lane <br />
            San Francisco, CA
            <br />
            United States
          </p>
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>GUIDR</h3>
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
