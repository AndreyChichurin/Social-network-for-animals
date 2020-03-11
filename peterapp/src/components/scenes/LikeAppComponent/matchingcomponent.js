import React, { useState, useEffect } from 'react'


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const Match = (animal) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),

      width: 900,
      backgroundColor: pink[50]
    },
    image: {
      width: 350,
      height: 250,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    button: {
      margin: 'auto',
      position: 'relative',
      backgroundColor: red[300]
    },
    block: {
      display: 'block',
      margin: 'auto',
      position: 'relative'
    }
  }));
  const classes = useStyles();
  const  { name, owner, age , location, image, description } = animal;

  return (
    <div className="app">
      <Paper className={classes.paper} backgro>
        {name}, {age} {/* Тут по идее должно быть имя/кличка понравившегося пользователя} */}
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={image} />
            </ButtonBase>
          </Grid>

          <Grid item xs={6} sm container >
            <Grid item xs container direction="column" spacing={3} >
  
              <List component="nav" className='ListPersonalCard' aria-label="mailbox folders">

                <ListItem>
                  <span>Ф.И.О. хозяина</span>
                  <div class="MuiListItemText-root"
                    style={{ textAlign: 'right' }}>
                    <ListItemText primary={owner} /></div>

                </ListItem>

                <Divider />
                <ListItem>
                  Город <div class="MuiListItemText-root"
                    style={{ textAlign: 'right' }}>
                    <ListItemText primary={location} /></div>
                </ListItem>
                <Divider light />
                <ListItem>
                  О Себе <div class="MuiListItemText-root"
                    style={{ textAlign: 'right' }}>
                    <ListItemText primary={description} />
                  </div>
                </ListItem>
              </List>
              <Link to='/likedby'>
                <Button className={classes.button} variant="contained" size="small" color="primary" >
                  <a>Открыть профиль</a>
              </Button>
              </Link>

            </Grid>


          </Grid>
        </Grid>
      </Paper>
      <br/>
    </div>
  );
}

export default Match