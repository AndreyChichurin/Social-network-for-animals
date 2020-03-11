import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import LoginButton from "./LoginButton"
// import LogoutButton from "./LogoutButton"
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatIcon from '@material-ui/icons/Chat';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import './navbar.css';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {

  const classes = useStyles();

  // let loginButton;
  // if (localStorage.token) {
  //   loginButton = <LoginButton />;
  // } else {
  //   loginButton = <LogoutButton />;
  // }
  return (
    <div className="nav-style">
      <AppBar position="static" color="default">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/" className="navlink" exact>
              <HomeIcon />
            </NavLink>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/likedby" className="navlink">
              <ChatIcon />
            </NavLink>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/match" className="navlink">
              <PeopleOutlineIcon />
            </NavLink>
          </IconButton>


          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to='/login' exact>
              <MeetingRoomIcon variant="contained" color="inherit"> variant="contained" color="inherit">
                Sign In
              </MeetingRoomIcon>
            </NavLink>
          </IconButton>


          <NavLink to='/account' exact>
            <Button variant="contained" color="inherit">
              Edit account
                      </Button>
          </NavLink>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
