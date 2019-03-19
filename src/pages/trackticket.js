import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class trackticket extends Component {
    constructor() {
        super();

        this.state = {
            trackingid: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        //this.props.history.push('/ticktform');

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="trackingid">Tracking ID</label>
                <input type="trackingid" id="trackingid" className="FormField__Input" placeholder="Enter your tracking number" name="trackingid" value={this.state.trackingid} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Track</button> <Link to="/ticktform" className="FormField__Link">Create new ticket</Link></div>
                  
            </form>
          </div>
        );
    }
}

export default trackticket;