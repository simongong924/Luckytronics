import React, { Component } from 'react';
import {BootstrapTable,
       TableHeaderColumn} from 'react-bootstrap-table';
//import '../css/Table.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>

          <TableHeaderColumn isKey dataField='TicketID'>
            TicketID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Subject'>
            Subject
          </TableHeaderColumn>
          <TableHeaderColumn dataField='Tdate'>
            Tdate
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;
