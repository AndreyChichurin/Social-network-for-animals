// import React from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Pink from '@material-ui/core/colors/pink';
// import {NavLink , BrowserRouter} from 'react-router-dom'
// import './navbar.css'

// function Navbar(classes) {
//   return (
//     <BrowserRouter>
//     <div >
//       <AppBar className="navlink">
//   <NavLink to="#"  className="navlink">Home</NavLink>
//   <NavLink to="#"  className="navlink">About</NavLink>
//   <NavLink to="#"  className="navlink">Portfolio</NavLink>
//   <NavLink to="#"  className="navlink">Contact</NavLink>
//       </AppBar>
//   </div>
//     </BrowserRouter>
//   );   
// }
// export default Navbar

import React from 'react';
import {NavLink , BrowserRouter} from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import Pink from '@material-ui/core/colors/pink';
import Home from './cabinet'

const pink = 'Pink[100]';
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

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BrowserRouter>
      <AppBar position="fixed" color='transparent'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <NavLink to="/Home"  className="navlink"><HomeIcon/></NavLink></IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><NavLink to="#"  className="navlink"><PeopleOutlineIcon/></NavLink></IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><NavLink to="#"  className="navlink"><FavoriteIcon/></NavLink></IconButton> 
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"><NavLink to="#"  className="navlink"><ChatIcon/></NavLink></IconButton> 
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </BrowserRouter>
    </div>
   
  );
}
