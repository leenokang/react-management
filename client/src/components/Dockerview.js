import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ContainerDelete from './ContainerDelete';

class Dockerview extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.Id}</TableCell>
        <TableCell>{this.props.Names}</TableCell>
        <TableCell>{this.props.State}</TableCell>
        <TableCell>{this.props.Status}</TableCell>
        <tableCell>
          <ContainerDelete
            stateRefresh={this.props.stateRefresh}
            Id={this.props.Id}
          />
        </tableCell>
      </TableRow>
    );
  }
}

export default Dockerview;
