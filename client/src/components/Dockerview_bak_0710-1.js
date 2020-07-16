import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Dockerview extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.Id}</TableCell>
      </TableRow>
    );
  }
}

export default Dockerview;
