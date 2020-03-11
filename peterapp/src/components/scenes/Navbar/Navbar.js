import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Navbar.css'

import { makeStyles, withStyles } from '@material-ui/core/styles';
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




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(4),
    
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

    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>

            <div className="ButtonNav">
            <NavLink to="/" className="navlink" exact >
             <p className="ButtonNav">Главная</p>

            </NavLink>
            
            </div>
            <div className="ButtonNav">
         
            <NavLink to="/likedby" className="navlink" >
              <div><p className="ButtonNav">Вас лайкнули</p></div>
            </NavLink>

       
            </div>
          {/* <span color='green'>
          <Button variant="contained" color="inherit" href='/logout'>
            EXIT
          </Button>
        </span> */}
          {/* {(!localStorage.token) ? */}
          {/* <div>
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
            </div>
            : */}
            <div className="ButtonNav">
          
            <NavLink to="/match" className="navlink" >
              <div><p className="ButtonNav">Пары</p></div>

            </NavLink>
            
          </div>



          <NavLink to='/login' exact className="navlink" >
            
              <div className="ButtonNav">Sign In</div>

          </NavLink>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
