import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Pink from '@material-ui/core/colors/pink';

function Navbar(classes) {
  return (
<AppBar position="static" color='Pink'>
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="Pink[300]" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      PugPug
    </Typography>
    <Button color="inherit">C</Button>
  </Toolbar>
</AppBar>
  );   
}
export default Navbar