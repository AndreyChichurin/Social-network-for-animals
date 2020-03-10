import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

function Navbar(classes) {

  let loginButton;
  if (localStorage.token) {
    loginButton = <LoginButton />;
  } else {
    loginButton = <LogoutButton />;
  }
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          PugPug
        </Typography>
        {/* <Button color="inherit">C</Button> */}
        <span color='green'>
          <Button variant="contained" color="inherit" href='/'>
            Home
        </Button> </span>
        <div>
          {loginButton}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar
