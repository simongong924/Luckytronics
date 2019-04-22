import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReCaptcha } from 'react-recaptcha-google'


class SignInForm extends Component {
    constructor() {
        super();
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {
            email: '',
            password: '',
            errors:{},
            isHuman : false

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
      if (recaptchaToken) {
        this.setState({
          isHuman:true
        })
      }
    }
    


    handleValidation(){
        let email = this.state.email;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;
        //let isHuman = true;
        //Name
        if(!email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if (!password) {
            formIsValid= false;
            errors["password"] = "Cannot be empty";
        }


       this.setState({errors: errors});
       return formIsValid;
   }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.isHuman) {
          alert('verify captcha');
        }
        if (this.handleValidation()) {
          if (this.state.isHuman) {

              alert("Form Submitted");

              this.props.history.push('/homepageUser'); 
          
          }
          
        } else{
            alert("Form error");
        }

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <h2> Sign In
             </h2>
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> </div>
             <ReCaptcha 
              sitekey="6Ld_Y58UAAAAANxW9B7B46ZthRasoC1Fqo3LdtcG"
              render="explicit"
              size="normal"
              onloadCallback={this.onLoadRecaptcha}
              verifyCallback={this.verifyCallback}
            />  
            </form>
  
           
          </div>
        );
    }
}

export default SignInForm;
