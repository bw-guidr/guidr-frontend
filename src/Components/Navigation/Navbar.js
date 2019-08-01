import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

class Nav extends React.Component {
  clearToken = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  loggedIn = () => {
    return(
      <div>
        <NavLink className="nav-links" exact to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink className="nav-links" exact to="/portfolio">
          Portfolio
        </NavLink>

        <NavLink className="nav-links" exact to="/profile">
          Profile
        </NavLink>

        <NavLink className="nav-links" exact to="/" onClick={this.clearToken}>
          Sign Out
        </NavLink>
      </div>
  )

  }

  signedOut = () => {
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


  render() {

    if(localStorage.getItem('token') === null){
      return(
      this.signedOut()
      )
    } else if(localStorage.getItem('token')){
      return(
        this.loggedIn()
      )
    }
  }
}

export default Nav;