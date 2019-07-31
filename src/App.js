import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home'
import Portfolio from './Components/Portfolio'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/Signup'
import Profile from './Components/Profile'


function App() {
  return (
   
    <Router>
          <Route
          exact path="/"
          render={() => (
            <Home />
          )}
        />  

        <Route
          exact path="/portfolio"
          render={() => (
            <Portfolio />
          )}
        />  

          <Route
          exact path="/login"
          render={() => (
            <Login />
          )}
        />

        <Route
          exact path="/signup"
          render={() => (
            <SignUp />
          )}
        />
        <Route
          exact path="/dashboard"
          render={() => <Portfolio/>}
        />
        <Route
          exact path="/profile"
          render={() => (
            <Profile />
          )}
        />
    </Router>
  );
}

export default App;
