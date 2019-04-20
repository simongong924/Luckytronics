import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class RealTimeChat extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div class="container">
       <div class="row">
           <div class="col-md-6 offset-md-3 col-sm-12">
               <h1 class="text-center">
                   Real Time Chat
                   <button id="clear" class="btn btn-danger">   Clear</button>
               </h1>
               <div id="status"></div>
               <div id="chat">
                   <input type="text" id="username" class="form-control" placeholder="Enter name...">
                   </input>
                   <br></br>
                   <div class="card">
                       <div id="messages" class="card-block">

                       </div>
                   </div>
                   <br></br>
                   <textarea id="textarea" class="form-control" placeholder="Enter message..."></textarea>
               </div>
       </div>
   </div>
   </div>
    );
  }
}

RealTimeChat.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(RealTimeChat);
