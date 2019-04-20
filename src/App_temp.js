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
import MyTicket from './pages/MyTicket';

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
              <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
              </a>
              <Link to="/" className="navbar-brand">Ticket System</Link>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/myticket" className="nav-link">My Ticket</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Ticket</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/track" className="nav-link">Track Ticket</Link>
                  </li>
                </ul>
              </div>
            </nav>
              <Route exact path="/myticket" component={MyTicket} />
              <Route exact path="/create" component={Ticktform} />
              <Route exact path="/track" component={TrackTicket} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;


// old UI design
// class App extends Component {
//   render() {
//     return (
//     		<div className ="App">
//     			<div className= "App__Aside"></div>
//     			<div className=" App__Form">
//           			<BrowserRouter>
//           				<div>
//           					<Navigation />
//     						<Switch>
//     							<Route path = "/sign-in" component = {SignInForm} exact/>
//     							<Route path ="/Sign-Up" component ={SignUpForm} />
//     							<Route path = "/Ticktform" component ={Ticktform}/>
//     							<Route path ="/trackticket" component ={trackticket}/>
//     						</Switch>
//     					</div>
//     				</BrowserRouter>
//     			</div>
//     		</div>);
//   }
// }
