import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table1 from './table1';

var data = [
  {TicketID: 213242, Subject: 'Error in app', Tdate: '12/08/2019'},
  {TicketID: 22332, Subject: 'problem', Tdate: '12/08/2018'}
];
 
class homepageUser extends Component {
	constructor(){
		super();
	}

 
  render() {
    return (
      <div id ="parent">
      <div>
      	 <h2> My tickets 
            </h2>
      </div>

      <div className="App">

        
        <p className="Table-header">Basic Table 
        </p>
        <Table1 data={data}/>
      </div>
       <div className="App">
        <p className="Table-header">Basic Table</p>
        <Table1 data={data}/>
      </div>

      </div>
    );
  }}

 
export default homepageUser;