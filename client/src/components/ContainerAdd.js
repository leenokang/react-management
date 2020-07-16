import React from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  hidden: {
    display: 'none',
  },
});

class ContainerAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Image: '',
      Cmd: '',
      name: '',
      open: false,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.addContainer().then((response) => {
      console.log(response.data);
      this.props.stateRefresh();
    });
    this.setState({
      Image: '',
      Cmd: '',
      name: '',
      open: false,
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  addContainer = () => {
    const url = '/api/Containers';
    const formData = new FormData();
    formData.append('Image', this.state.Image);
    formData.append('Cmd', this.state.Cmd);
    formData.append('name', this.state.name);
    return post(url, formData);
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      Image: '',
      Cmd: '',
      name: '',
      open: false,
    });
  };

  render() {
    return (
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Container Create
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Container Create</DialogTitle>
          <DialogContent>
            <TextField
              label="Image"
              type="text"
              name="Image"
              value={this.state.Image}
              onChange={this.handleValueChange}
            />
            <br />
            <TextField
              label="Cmd"
              type="text"
              name="Cmd"
              value={this.state.Cmd}
              onChange={this.handleValueChange}
            />
            <br />
            <TextField
              label="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleValueChange}
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleFormSubmit}
            >
              Create
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
      <form onSubmit={this.handleForSubmit}>
        <h1>Container Add</h1>
        Container Image :{' '}
        <input
          type="text"
          name="Image"
          value={this.state.Image}
          onChange={this.handleValueChange}
        />
        <br />
        Container Cmd :{' '}
        <input
          type="text"
          name="Cmd"
          value={this.state.Cmd}
          onChange={this.handleValueChange}
        />
        <br />
        Container name :{' '}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleValueChange}
        />
        <br />
        <button type="submit">Add</button>
      </form>
      */
    );
  }
}

export default withStyles(styles)(ContainerAdd);
