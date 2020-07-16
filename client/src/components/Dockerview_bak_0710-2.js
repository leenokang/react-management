import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Dockerview extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.states}</TableCell>
        <TableCell>{this.props.fromImage}</TableCell>
      </TableRow>
    );
  }
}

export default Dockerview;
