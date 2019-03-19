import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ticktform extends Component {
    constructor() {
        super();

        this.state = {
            Subject: '',
            Details: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
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
