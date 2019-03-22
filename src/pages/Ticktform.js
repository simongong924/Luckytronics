import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let company = target.company;
        this.setState({
          [name]: value
        });
        console.log(name);

    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
        	alert("ticket Submitted");
          const newTicket = {
              ticket_subject: this.state.subject,
              ticket_details: this.state.details,
              ticket_name: this.state.name,
              ticket_email: this.state.email,
              ticket_hasAgreed: this.state.hasAgreed
          }

          axios.post('http://localhost:5000/users/addTicket', newTicket)
          .then(res => console.log(res.data));

          this.setState({
            subject: '',
            details: '',
            name: '',
            email: '',
            hasAgreed: false
          })
          console.log('The form was submitted with the following data:');
          console.log(this.state);
        }
        else{
        	alert("Please Fill in all fields");
        }
    }

    render() {
        return (
        <div className="FormCenter">
        	<h2> Create a ticket </h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="subject">Subject</label>
                <input type="subject" id="subject" className="FormField__Input" placeholder="Enter a Subject" name="subject" value={this.state.Subject} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="details">Details</label>
                <textarea type="details" id="details" className="FormField__Input" placeholder="Enter your queries here" name="details" value={this.state.Details} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address (if you have not signed in)</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email " name="email" value={this.state.email} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree to receive notifications
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
