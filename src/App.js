import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Components/Home'
import Login from './Components/Auth/Login'
import SignUp from './Components/Auth/Signup'

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
    </Router>
  );
}

export default App;
