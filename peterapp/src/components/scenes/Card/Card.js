import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '30px 30px',
  },
  media: {
    height: 200,
  },
});

export default function MediaCard(animal) {
  const classes = useStyles();
  const  { name, desc, age , location, image, description } = animal;
  // const  { image, color  } = animal;

  return (
    <div style={{boxShadow: "1px 3px 1px #9E9E9E"}}>
      <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}, <span>{age}</span>, <span>{location}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}{desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid 
      container
      direction="row"
      justify="center">
      <CardActions >
        <Button size="small" color="primary" >
          <ChatIcon />
        </Button>
        <Button size="small" color="primary" >
        <FavoriteIcon color="secondary"/>
        </Button>
      </CardActions></Grid>
    </Card>
      </div>
  );
}
