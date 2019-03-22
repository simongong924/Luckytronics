import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation =()=>{
	return (

		<div className = "topnav">
			<NavLink to ="/sign-in"> Sign In </NavLink>
			
			<NavLink to ="/sign-up"> Sign up </NavLink>
			<NavLink to ="/Ticktform"> Create a Ticket </NavLink>
			<NavLink to ="/trackticket"> Track a Ticket </NavLink>
			
		</div>

		);
};

export default Navigation;