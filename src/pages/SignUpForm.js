import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";


class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',
            company: '',
            hasAgreed: false,
            errors:{}
        };
    }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2,
          company: this.state.compnay,
          role: "user",
          hasAgreed: false
        };
    this.props.registerUser(newUser, this.props.history);
  };
  render() {
    const { errors } = this.state;
        return (
        <div className="FormCenter">
            <h2> Register
            </h2>
            <form onSubmit={this.onSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text"
                       id="name"
                       className="FormField__Input"
                       placeholder="Enter your full name"
                       name="name"
                       value={this.state.name}
                       onChange={this.onChange}
                       className={classnames("", {
                         invalid: errors.name})}
                         />
               <span className="red-text">{errors.name}</span>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email"
                       id="email"
                       className="FormField__Input"
                       placeholder="Enter your email"
                       name="email"
                       value={this.state.email}
                       onChange={this.onChange}
                       className={classnames("", {
                         invalid: errors.email})}/>
               <span className="red-text">{errors.email}</span>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password"
                       id="password"
                       className="FormField__Input"
                       placeholder="Enter your password"
                       name="password"
                       value={this.state.password}
                       onChange={this.onChange}
                       className={classnames("", {
                         invalid: errors.password})}/>
                 <span className="red-text">{errors.password}</span>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password2">Confirm Password</label>
                <input type="password"
                       id="password2"
                       className="FormField__Input"
                       placeholder="Confirm your password"
                       name="password2"
                       value={this.state.password2}
                       onChange={this.onChange}
                       className={classnames("", {
                         invalid: errors.password2})} />
                 <span className="red-text">{errors.password2}</span>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="company">Company Name</label>
                <input type="company"
                       id="company"
                       className="FormField__Input"
                       placeholder="Enter your comapny name"
                       name="company"
                       value={this.state.company}
                       onChange={this.onChange}
                       className={classnames("", {
                         invalid: errors.company})}/>
               <span className="red-text">{errors.company}</span>
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button>
                  <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

SignUpForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  {registerUser}
)(withRouter(SignUpForm));
