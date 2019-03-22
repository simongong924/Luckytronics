import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            company: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleValidation(){
        let email = this.state.email;
        let password = this.state.password;
        let name = this.state.name;
        let company = this.state.company;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if (!password) {
            formIsValid= false;
            errors["password"] = "Cannot be empty";
        }

        if (!company) {
            formIsValid= false;
            errors["company"] = "Cannot be empty";
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
        let company = target.company;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
          console.log(`Form submitted:`);
          console.log(`Todo Description: ${this.state.todo_description}`);
          console.log(`Todo Responsible: ${this.state.todo_responsible}`);
          console.log(`Todo Priority: ${this.state.todo_priority}`);
          console.log(`Todo Completed: ${this.state.todo_completed}`);

          const newTodo = {
              user_email: this.state.email,
              user_password: this.state.password,
              user_name: this.state.name,
              user_company: this.state.comapny,
              user_role: 'user',
              user_hasAgreed: this.state.hasAgreed
          }

          axios.post('http://localhost:5000/users/add', newTodo)
          .then(res => console.log(res.data));

          this.setState({
              todo_description: '',
              todo_responsible: '',
              todo_priority: '',
              todo_completed: false
          })
        } else{
            alert("Please Fill in all fields");
        }
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <h2> Register
            </h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="company">Company Name</label>
                <input type="company" id="company" className="FormField__Input" placeholder="Enter your comapny name" name="company" value={this.state.company} onChange={this.handleChange} />
              </div>


              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
