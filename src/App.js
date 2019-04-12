import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Ticktform from './pages/Ticktform';
import TrackTicket from './pages/trackticket';
import homepageUser from './pages/homepageUser';
//import Navigation from './Navigation';
import Table1 from'./pages/table1';
import './App.css';
import logo from "./logo.png";

  var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'}
];

class App extends Component {
  render() {
    return (
      <div id="parent">
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
                  <Link to="/" className="nav-link">Sign In</Link>
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
                  <Link to="/homepageUser" className="nav-link">Home</Link>
                </li>
                
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/create" component={Ticktform} />
          <Route path="/track" component={TrackTicket} />
          <Route path="/homepageUser" component={homepageUser} />
        </div>
      </Router>

      </div>
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
