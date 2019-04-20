import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTicket } from "../actions/ticketActions";
import classnames from "classnames";

class Ticktform extends Component {
    constructor() {
        super();
        this.state = {
            subject: '',
            details: '',
            name: '',
            email: '',
            hasAgreed: false
        };


    }
    handleValidation(){
        let subject = this.state.subject;
        let details = this.state.details;
        let name = this.state.name;
        let errors = {};
        let formIsValid = true;

        console.log(this.state);
        //Name
        if(!subject){
           formIsValid = false;
           errors["subject"] = "Subject cannot be empty";
        }

        if (!details) {
            formIsValid= false;
            errors["details"] = "Details cannot be empty";
        }

        if (!name) {
            formIsValid= false;
            errors["name"] = "Name cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
   }

   onChange = e => {
     this.setState({ [e.target.id]: e.target.value });
   };

   onSubmit = e => {
       e.preventDefault();
       const ticketData = {
         subject: this.state.subject,
         details: this.state.details,
         name: this.state.name,
         email: this.state.email
       };
       console.log(ticketData);
       // console.log(this.props.loginUser);
       this.props.addTicket(ticketData);
   };
    render() {
        return (
        <div className="FormCenter">
        	<h2> Create a ticket </h2>
            <form onSubmit={this.onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.onChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="subject">Subject</label>
                <input type="subject" id="subject" className="FormField__Input" placeholder="Enter a Subject" name="subject" value={this.state.Subject} onChange={this.onChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="details">Details</label>
                <textarea type="details" id="details" className="FormField__Input" placeholder="Enter your queries here" name="details" value={this.state.Details} onChange={this.onChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address (if you have not signed in)</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email " name="email" value={this.state.email} onChange={this.onChange} />
              </div>


              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.onChange} /> I agree to receive notifications
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button> <Link to="/trackticket" className="FormField__Link">track new ticket</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default Ticktform;
