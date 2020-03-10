import React from 'react'
import Navbar from './scenes/LogIn/navbar/navbar'
// import Navbar from './navbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import pink from '@material-ui/core/colors/pink';
import IconButton from'@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
// import pink from '@material-ui/core/Pink'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
    
  },
  paper: {
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 950,
    backgroundColor: pink[50]
    
  },
  image: {
    width: 500,
    height: 500,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function PersonalPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} backgro>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i0.wp.com/tailytales.ru/wp-content/uploads/2019/04/dogs-9.jpg?w=850" />
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
      <ListItem button>
        <ListItemText primary="Сталинара Ибрагимовна Фетч" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Село-на-доне" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Контакты" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Избраные" />
      </ListItem>
    
    <Divider light />
      <ListItem button>
        <ListItemText primary="Люблю собак, они меня. Моя дама, на фото с лева , оющительная, как и я. Ищу кабеля и хорошего хозяина или хозяйку, чтобы во время их утех я не скучала." />
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

    </div>
  );
}
