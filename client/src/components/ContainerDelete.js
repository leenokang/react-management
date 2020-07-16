import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ContainerDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  deleteContainer(Id) {
    const url = '/api/containers/' + Id;
    fetch(url, {
      method: 'DELETE',
    });
    this.timer = setTimeout(this.props.stateRefresh, 1000);
    //this.props.stateRefresh();
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          Down
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle onClose={this.handleClose}>shutdown warning</DialogTitle>
          <DialogContent>
            <Typography gutterBottom>will be shutdown.</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.deleteContainer(this.props.Id);
              }}
            >
              shudown
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              Exit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      /*
        <Button
        onClick={(e) => {
          this.deleteContainer(this.props.Id);
        }}
      >
        shutdown
      </Button>
      */
    );
  }
}

export default ContainerDelete;
