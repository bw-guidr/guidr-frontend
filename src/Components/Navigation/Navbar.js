import React from './node_modules/react'
import { NavLink } from './node_modules/react-router-dom';
import { connect } from "./node_modules/react-redux";

class Nav extends React.Component {
    render(){
        return(
            <div>
            <NavLink className="nav-links nav-link-home" exact to="/login"  >Login</NavLink>
            <NavLink className="nav-links" onClick={this.clearToken} exact to="/signup">Sign-Up</NavLink>
            <NavLink className="nav-links" onClick={this.clearToken} exact to="/">Home</NavLink>

            </div>
        )
    }
}

export default Nav