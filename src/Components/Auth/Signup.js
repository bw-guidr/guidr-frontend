import React from 'react'
import Nav from '../Navigation/Navbar'
import { signup } from '../../Store/Action/Action'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import './auth.css'
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            credentials: {
                username: '',
                password: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    signupSubmit = (event) => {
        event.preventDefault();
        this.props.signup(this.state.credentials);
        
        this.setState({
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email: ''
        })
        this.props.history.push('/login')
        console.log(this.state)
    }

    render() {
        return (
            <div className="signup-page">
                <Nav />
                <div>
                <h1 className="signup-text">Create an Account</h1>
                <form 
                className="signup-form"
                onSubmit={this.signupSubmit}>
                    <input
                        className="username-field"
                        name='username'
                        placeholder="username"
                        type="string"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input
                        className="firstname-field"
                        name='firstName'
                        placeholder="first name"
                        type="string"
                        value={this.state.credentials.firstName}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input
                        className="lastname-field"
                        name='lastName'
                        placeholder="last name"
                        type="string"
                        value={this.state.credentials.lastName}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input
                        className="email-field"
                        type="string"
                        name='email'
                        placeholder="email address"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        required>
                    </input>
                    <input
                        className="password-field"
                        type="password"
                        name='password'
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        required>
                    </input>
                    
                    <button className="signup-btn" onClick={this.signupSubmit}>{this.props.isLoggingIn ? (
                        <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
                    ):( `Let's go!`)} </button>
                    
                    <NavLink exact to="/"><div className="login-back-btn"></div></NavLink>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggingIn:state.isLoggingIn
})

export default withRouter(connect(
    mapStateToProps, { signup } 
)(Signup))
