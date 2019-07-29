import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";

class Nav extends React.Component {
    render(){
        return(
            <div>
            <NavLink className="nav-links nav-link-home" exact to="/login"  >Login</NavLink>
            <NavLink className="nav-links"  exact to="/signup">Sign-Up</NavLink>
            <NavLink className="nav-links"  exact to="/">Home</NavLink>

            </div>
        )
    }
}

export default Nav