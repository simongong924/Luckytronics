import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {ReCaptcha} from 'react-recaptcha-google';

class Ticktform extends Component {
    constructor() {
        super();

        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);

        this.state = {
            subject: '',
            details: '',
            name: '',
            email: '',
            hasAgreed: false,
            file: null,
            isHuman:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    fileChangedHandler = (event) => {
   this.setState({file : event.target.files[0]})
     }
     componentDidMount() {
      // If logged in and user navigates to Login page, should redirect them to dashboard
      
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
      uploadHandler = () => {
  console.log(this.state.file)
}

    handleSubmit(e) {
      if (this.state.isHuman) {
        e.preventDefault();
        if (this.handleValidation()) {
         alert("ticket Submitted");
          const newTicket = {
              ticket_subject: this.state.subject,
              ticket_details: this.state.details,
              ticket_name: this.state.name,
              ticket_email: this.state.email,
              ticket_hasAgreed: this.state.hasAgreed,
           //   ticket_file:this.state.file
          }
          const filedata = new FormData()
          filedata.append('myfile',this.state.file,this.state.file.name)

          console.log(filedata);
          axios.post('http://localhost:5000/users/addFile',filedata)
          axios.post('http://localhost:5000/users/addTicket', newTicket)
          .then(res => console.log(res.data));

          this.setState({
            subject: '',
            details: '',
            name: '',
            email: '',
            hasAgreed: false,
            //file: null
          })
          console.log('The form was submitted with the following data:');
          console.log(this.state);
 
          alert("Ticket created successfully!");
        }}
        else{
         alert("Please Fill in all fields and verify captcha");
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

               <div>
               <input type="file" onChange = {this.fileChangedHandler}/>
               </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Submit</button> <Link to="/trackticket" className="FormField__Link">track new ticket</Link>
              </div>
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

export default Ticktform;



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { addTicket } from "../actions/ticketActions";

// //import { addNewTicket } from "../actions/authActions";
// import classnames from "classnames";
// //const axios = require("axios");

// class Ticktform extends Component {
//     constructor() {
//         super();
//         //this.addNewTicket = this.addNewTicket.bind(this);
//         this.state = {
//             subject: '',
//             details: '',
//             name: '',
//             email: '',
//             hasAgreed: false,
//             file:null
//         };


//     }
//     fileChangedHandler = (event) => {
//   const file = event.target.files[0]
// }
//     handleValidation(){
//         let subject = this.state.subject;
//         let details = this.state.details;
//         let name = this.state.name;
//         let errors = {};
//         let formIsValid = true;

//         console.log(this.state);
//         //Name
//         if(!subject){
//            formIsValid = false;
//            errors["subject"] = "Subject cannot be empty";
//         }

//         if (!details) {
//             formIsValid= false;
//             errors["details"] = "Details cannot be empty";
//         }

//         if (!name) {
//             formIsValid= false;
//             errors["name"] = "Name cannot be empty";
//         }

//        this.setState({errors: errors});
//        return formIsValid;
//    }

//    onChange = e => {
//      this.setState({ [e.target.id]: e.target.value });
//    };
// //   uploadHandler = () => {
// //  console.log(this.state.file)
// //}

//    onSubmit = e => {
//        e.preventDefault();
//        const newTicket = {
//          subject: this.state.subject,
//          details: this.state.details,
//          name: this.state.name,
//          email: this.state.email
//          //file:this.state.file
//        };
//        console.log(newTicket);
//        // console.log(this.props.loginUser);
//        //this.props.addTicket(ticketData).bind(this);
//        this.props.addTicket(newTicket,this.props.history);

//      // this.props.addTicket(newTicket, this.props.history);
//    };
//     render() {
//         return (
//         <div className="FormCenter">  
//         	<h2> Create a ticket </h2>
//             <form onSubmit={this.onSubmit} className="FormFields">
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="name">Full Name</label>
//                 <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.onChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="subject">Subject</label>
//                 <input type="subject" id="subject" className="FormField__Input" placeholder="Enter a Subject" name="subject" value={this.state.Subject} onChange={this.onChange} />
//               </div>
//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="details">Details</label>
//                 <textarea type="details" id="details" className="FormField__Input" placeholder="Enter your queries here" name="details" value={this.state.Details} onChange={this.onChange} />
//               </div>

//               <div className="FormField">
//                 <label className="FormField__Label" htmlFor="email">E-Mail Address (if you have not signed in)</label>
//                 <input type="email" id="email" className="FormField__Input" placeholder="Enter your email " name="email" value={this.state.email} onChange={this.onChange} />
//               </div>


//               <div className="FormField">
//                 <label className="FormField__CheckboxLabel">
//                     <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.onChange} /> I agree to receive notifications
//                 </label>
//               </div>
//               <div>
//               <input type="file" onChange = {this.fileChangedHandler}/>
//               <button onClick={this.uploadHandler}>Upload!</button>
//               </div>


//               <div className="FormField">
//                   <button className="FormField__Button mr-20">Submit</button> <Link to="/trackticket" className="FormField__Link">track new ticket</Link>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }

// export default Ticktform;
