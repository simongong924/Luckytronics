import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ReCaptcha} from 'react-recaptcha-google'

class SignUpForm extends Component {
    constructor() {
        super();
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.state = {
            email: '',
            password: '',
            name: '',
            company: '',
            hasAgreed: false,
            ishuman : false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
      if (this.captchaDemo) {
        console.log("just started");
        this.captchaDemo.reset();
      }
    }

    onLoadRecaptcha(){
      if (this.captchaDemo) {
        this.captchaDemo.reset();
        
      }
    }

    verifyCallback(recaptchaToken){
      console.log(recaptchaToken," <- This is your token");
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
        if (this.state.ishuman) {
        if (this.handleValidation()) {
          console.log(`Form submitted:`);

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
            user_email: '',
            user_password: '',
            user_name: '',
            user_company: '',
            user_role: '',
            user_hasAgreed: false
          })
          console.log('The form was submitted with the following data:');
          console.log(this.state);
          alert("User created successfully!");
        }} else{
            alert("Please Fill in all fields and verify captcha");
        }
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
                  <button className="FormField__Button mr-20">Sign Up</button> 
              </div>
            </form>
            <ReCaptcha 
              sitekey="6Ld_Y58UAAAAANxW9B7B46ZthRasoC1Fqo3LdtcG"
              render="explicit"
              size="normal"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />  
          </div>
        );
    }
}

export default SignUpForm;
