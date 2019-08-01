import React from "react";
import "./App.scss";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Login from "./Components/Auth/Login";
import SignUp from "./Components/Auth/Signup";
import Profile from "./Components/Profile";

function App() {
  let id = localStorage.getItem('id');
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Home />} />

        <Route exact path="/user/:id" render={(props) => <Portfolio {...props} />} />

        <Route exact path="/login" render={() => <Login />} />

        <Route exact path="/signup" render={() => <SignUp />} />
        <Route exact path="/dashboard" render={() => <Portfolio id={id} />} />

      </Switch>
    </Router>
  );
}

export default App;
