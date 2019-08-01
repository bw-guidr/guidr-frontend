import React from "react";
import Header from "../Header";
import { signup } from "../../Store/Action/Action";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "./auth.css";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Footer from '../Footer';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
        name: "",
        title: "",
        tagline: "",
        age: "",
        length_as_guide: "",
        image_url: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  signupSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state.credentials);

    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      tagline: "",
      age: "",
      length_as_guide: "",
      image_url: ""
    });
    this.props.history.push("/login");
    console.log(this.state);
  };

  render() {
    return (
      <div className="signup-page">
        <Header />
        <div>
          <div className="signup-header-text">
            <h1 className="signup-text">Register</h1>
            <h3>Start building your outdoor resume</h3>
          </div>
          <form className="signup-form" onSubmit={this.signupSubmit}>
            <input
              className="name"
              name="name"
              placeholder="Name"
              type="string"
              value={this.state.credentials.name}
              onChange={this.handleChange}
              required
            />
            <input
              className="username-field"
              name="username"
              placeholder="Username"
              type="string"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              required
            />
            <input
              className="password-field"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              required
            />
            <input
              className="title-field"
              type="string"
              name="title"
              placeholder="Your Title"
              value={this.state.credentials.title}
              onChange={this.handleChange}
            />
            <input
              className="tagline-field"
              type="string"
              name="tagline"
              placeholder="Guide Specialization"
              value={this.state.credentials.tagline}
              onChange={this.handleChange}
            />
            <input
              className="age-field"
              type="number"
              name="age"
              placeholder="Age"
              value={this.state.credentials.age}
              onChange={this.handleChange}
            />
            <input
              className="guideTime-field"
              type="string"
              name="length_as_guide"
              placeholder="Years of Experience"
              value={this.state.credentials.length_as_guide}
              onChange={this.handleChange}
            />

            <input
              className="imageurl-field"
              type="string"
              name="image_url"
              placeholder="Profile Picture URL"
              value={this.state.credentials.image_url}
              onChange={this.handleChange}
            />

            <NavLink exact to="/">
              <div className="login-back-btn" />
            </NavLink>
          </form>
          
          <button className="signup-btn" onClick={this.signupSubmit}>
              {this.props.isLoggingIn ? (
                <Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="12"
                  width="26"
                />
              ) : (
                `Register`
              )}{" "}
            </button>
        </div>
        <div className="signin-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default withRouter(
  connect(
    mapStateToProps,
    { signup }
  )(Signup)
);
