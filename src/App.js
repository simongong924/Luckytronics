import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {HashRouter as Router,Route, Link, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Ticktform from './pages/Ticktform';
import trackticket from './pages/trackticket';
import Navigation from './Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
    		<div className ="App">
    			<div className= "App__Aside"></div>
    			<div className=" App__Form">
          			<BrowserRouter>
          				<div>
          					<Navigation />
    						<Switch>
    							<Route path = "/sign-in" component = {SignInForm} exact/>
    							<Route path ="/Sign-Up" component ={SignUpForm} />
    							<Route path = "/Ticktform" component ={Ticktform}/>
    							<Route path ="/trackticket" component ={trackticket}/>
    						</Switch>
    					</div>
    				</BrowserRouter>
    			</div>
    		</div>



          );
  }
}

export default App;


/*


          	<BrowserRouter>
    		<Switch>
    			<Route path = "/" component = {SignInForm} exact/>
    			<Route path ="/SingUp" component ={SignUpForm} />
    			<Route path = "/Ticktform" component ={Ticktform}/>
    		</Switch>

    	</BrowserRouter>
*/