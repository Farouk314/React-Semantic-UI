import React, { Component } from 'react';
import AppBar from "@material-ui/core/AppBar";
import { Menu, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem"

class App extends Component {
  state = {
    anchorEl: null
  }

  handleClick = e => {
    this.setState({
      anchorEl: e.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <IconButton color="inherit" aria-haspopup="true" onClick={this.handleClick}>
                <MenuIcon aria-owns={anchorEl ? "menu" : undefined} />
              </IconButton>
              <Menu id="menu" open={Boolean(anchorEl)} onClose={this.handleClose}>
                <MenuItem onClick={this.handleClose} > Home </MenuItem>
                <MenuItem onClick={this.handleClose} > About </MenuItem>
                <MenuItem onClick={this.handleClose} > Contact </MenuItem>
              </Menu>
            </Typography>
          </Toolbar>
      </AppBar>
    );
  }
}

export default App;
