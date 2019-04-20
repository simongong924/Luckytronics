import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";


class SignInForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors:{}
        };
    }

    componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }


    componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
        console.log(userData);
        // console.log(this.props.loginUser);
        this.props.loginUser(userData);
    };
    render() {
        const { errors } = this.state;
        return (
        <div className="FormCenter">
            <h2> Sign In
             </h2>
            <form onSubmit={this.onSubmit} className="FormFields">
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
                          invalid: errors.email || errors.emailnotfound
                        })}/>
               <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}</span>
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
                    invalid: errors.password || errors.passwordincorrect
                  })}/>
                 <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}</span>
              </div>
              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button>
                  <Link to="/signup" className="FormField__Link">Create new account</Link></div>
            </form>
          </div>
        );
    }
}

SignInForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(SignInForm);

// export default SignInForm;
