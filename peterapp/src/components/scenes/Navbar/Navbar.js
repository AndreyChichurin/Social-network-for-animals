import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatIcon from '@material-ui/icons/Chat';

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

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/" className="navlink" exact>
              <HomeIcon />
            </NavLink>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/account" className="navlink">
              <PeopleOutlineIcon />
            </NavLink>
          </IconButton>

          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/chat" className="navlink">
              <ChatIcon />
            </NavLink>
          </IconButton>

          {/* <span color='green'>
          <Button variant="contained" color="inherit" href='/logout'>
            EXIT
          </Button>
        </span> */}

          <NavLink to='/login' exact>
            <Button variant="contained" color="inherit">
              Sign In
            </Button>
          </NavLink>

          <NavLink to='/register' exact>
            <Button variant="contained" color="inherit">
              Sign Up
            </Button>
          </NavLink>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
