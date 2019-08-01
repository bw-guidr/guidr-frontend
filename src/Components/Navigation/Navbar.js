import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

class Nav extends React.Component {
  render() {

    if(localStorage.getItem('toke') === null){
      return(
        <div>
          <NavLink className="nav-links" exact to="/">
            Home
          </NavLink>

          <NavLink className="nav-links" exact to="/overview">
            Overview
          </NavLink>

          <NavLink className="nav-links" exact to="/features">
            Features
          </NavLink>

          <NavLink className="nav-links" exact to="/signup">
            Register
          </NavLink>

          <NavLink className={`nav-links login-btn`} exact to="/login">
            Login
          </NavLink>
        </div>
      )
    }
    else if(localStorage.getItem('token')){
      return (

        <div>
          <NavLink className="nav-links" exact to="/dashboard">
            Dashboard
          </NavLink>

          <NavLink className="nav-links" exact to="/profile">
            Profile
          </NavLink>

          <NavLink className="nav-links" exact to="/portfolio">
            Portfolio
          </NavLink>

          <NavLink className="nav-links" exact to="/">
            Sign Out
          </NavLink>
        </div>

      );
    }
  }
}

export default Nav;