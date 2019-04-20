import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Table1 from './Table1';

var data = [
  {TicketID: 21324, Subject: 'Error in app', Tdate: '12/04/2019'},
  {TicketID: 22332, Subject: 'problem', Tdate: '12/04/2019'}
];

class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;
    console.log(user)
     {user.name.split(" ")[0]}
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
              Below are you submitted tickets:{" "}
              </p>
            </h4>
          </div>
        </div>
       <Table1 data={data}/>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
