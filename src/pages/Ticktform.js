import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ticktform extends Component {
    constructor() {
        super();

        this.state = {
            Subject: '',
            Details: '',
            name: '',
            email: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValidation(){
        let subject = this.state.Subject;
        let details = this.state.Details;
        let name = this.state.name;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!subject){
           formIsValid = false;
           errors["subject"] = "Cannot be empty";
        }

        if (!details) {
            formIsValid= false;
            errors["details"] = "Cannot be empty";
        }

        if (!name) {
            formIsValid= false;
            errors["name"] = "Cannot be empty";
        }
       this.setState({errors: errors});
       return formIsValid;
   }    

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        let Details = target.Details;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
        	alert("ticket Submitted");
        	        }
        else{
        	alert("please fill in all fields");
        }
        console.log('The form was submitted with the following data:');
        console.log(this.state);
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
                <label className="FormField__Label" htmlFor="Subject">Subject</label>
                <input type="Subject" id="Subject" className="FormField__Input" placeholder="Enter a Subject" name="Subject" value={this.state.Subject} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="Details">Details</label>
                <textarea type="Details" id="Details" className="FormField__Input" placeholder="Enter your queries here" name="Details" value={this.state.Details} onChange={this.handleChange} />
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
