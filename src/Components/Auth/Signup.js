import React from "react";
import Header from "../Header";
import { signup } from "../../Store/Action/Action";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "./auth.css";
import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
        length_as_guide: ""
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
      length_as_guide: ""
    });
    this.props.history.push("/login");
    console.log(this.state);
  };

  render() {
    return (
      <div className="signup-page">
        <Header />
        <div>
          <h1 className="signup-text">Create an account</h1>
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
              placeholder="username"
              type="string"
              value={this.state.credentials.username}
              className="username-field"
              name="username"
              placeholder="username"
              type="string"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              required
            />
            <input
              className="password-field"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              required
            />
            <input
              className="title-field"
              type="string"
              name="title"
              placeholder="Your job title here"
              value={this.state.credentials.title}
              onChange={this.handleChange}
            />
            <input
                className="tagline-field"
                type="string"
                name="tagline"
                placeholder="Add a short description of the type of guide you specialize in"
                value={this.state.credentials.tagline}
                onChange={this.handleChange}
            />
            <input
                className="age-field"
                type="number"
                name="age"
                placeholder="Enter age here"
                value={this.state.credentials.age}
                onChange={this.handleChange}
            />
            <input
                className="guideTime-field"
                type="string"
                name="length_as_guide"
                placeholder="Enter guide experience here e.g. 4 years"
                value={this.state.credentials.length_as_guide}
                onChange={this.handleChange}
            />

            <button className="signup-btn" onClick={this.signupSubmit}>
              {this.props.isLoggingIn ? (
                <Loader
                  type="ThreeDots"
                  color="#1f2a38"
                  height="12"
                  width="26"
                />
              ) : (
                `Let's go!`
              )}{" "}
            </button>

            <NavLink exact to="/">
              <div className="login-back-btn" />
            </NavLink>
          </form>
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
