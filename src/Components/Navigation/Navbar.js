import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

class Nav extends React.Component {
  clearToken = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  loggedIn = () => {
    let id = localStorage.getItem('id');
    return(
      <div>
        <NavLink className="nav-links" exact to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink className="nav-links" exact to={`/user/${id}`}>
          Portfolio
        </NavLink>

        <NavLink className="nav-links" exact to={`/user/${id}`}>
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

          <a className="nav-links" href='https://condescending-davinci-58ec2b.netlify.com/'>
            Overview
          </a>

          <a className="nav-links" href='https://condescending-davinci-58ec2b.netlify.com/'>
            Features
          </a>

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