import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import IconButton from'@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
// import pink from '@material-ui/core/Pink'
import AnnouncementForm from "../AnnouncementForm/AnnouncementForm"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    
    maxWidth: 550,
    backgroundColor: pink[50]
  },
  image: {
    width: 250,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button:{
    margin: 'auto',
    position: 'relative',
    backgroundColor: red[300]
  },
  block:{
    display: 'block',
    margin: 'auto',
    position: 'relative'
  }
}));


export default function PersonalPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} backgro>
        Username {/* Тут по идее должен быть лоигн зарегистрировавшегося пользователя*/}
        <Grid container spacing={2}>

          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRb1rbKH9VCUTzbqNwyRaVVoz5CFto6NTy5EHBxwnAd9kc4oUe7" />
            </ButtonBase>
          </Grid>

          <Grid item xs={6} sm container >
            <Grid item xs container direction="column" spacing={3} >
              <Grid item xs>
                {/* <ul>
                  <li>Name</li>
                  <li>LastName</li>
                  <li>Phone</li>
                  <li>Hobby</li>

                </ul> */}
                 <List component="nav" className='ListPersonalCard' aria-label="mailbox folders">
      <ListItem>
        Ф.И.О. <span>{" "}</span>
        <ListItemText primary="Андрей Андреевич Щукин" />
      </ListItem>
      <Divider />
      <ListItem>
        Город/Страна <span></span>
        <ListItemText primary="Петербург" />
      </ListItem>
    <Divider light />
      <ListItem>
        О Себе/Питомцах <span></span>
        <ListItemText primary="Мои питомцы ищет пару и хорошего хозяина или хозяйку, чтобы во время их утех не скучали." />
      </ListItem>
    </List>
                
              </Grid>
              
                  <IconButton aria-label="delete"className="addButton">
                    <GitHubIcon className="addButonFlex" /> 
                  </IconButton>              
            </Grid>            
          </Grid>
        </Grid>
      </Paper>
      <div className={classes.block}>
      <NavLink to='/announcement'>
        <Button className={classes.button} variant="contained" size="small" color="secondary" >   
           Добавить объявление
        </Button>
        </NavLink>
        <Button className={classes.button} variant="contained" size="small" color="primary" >
           Избранные
        </Button>

        
        </div>
    </div>
  );
}
