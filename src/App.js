import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Ticktform from './pages/Ticktform';
import TrackTicket from './pages/trackticket';
import Navigation from './Navigation';
import PrivateRoute from './pages/PrivateRoute';
import Dashboard from './pages/Dashboard';
import RealTimeChat from './pages/RealTimeChat';
import Logout from './pages/Logout';


import './App.css';
import logo from "./logo.png";



// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a id='navbar-id'className="navbar-brand" target="_blank">
                <img src={logo} width="30" height="30"/>
              </a>
              <Link to="/" className="navbar-brand">Ticket System</Link>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/signin" className="nav-link">Sign In</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/signup" className="nav-link">Sign Up</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Ticket</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/track" className="nav-link">Track Ticket</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/chat" className="nav-link">Real Time Chat</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/logout" className="nav-link">Log Out</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route exact path="/signin"  component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/create" component={Ticktform} />
            <Switch>
              <PrivateRoute exact path="/track" component={TrackTicket} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/chat" component={RealTimeChat} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/logout" component={Logout} />

            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
