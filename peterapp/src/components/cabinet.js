import React from 'react'
import Navbar from './navbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 950,
  },
  image: {
    width: 400,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1192,w_2122,x_0,y_74/f_auto,q_auto,w_1100/v1575329078/shape/mentalfloss/609640-gettyimages-802480150.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Имя: Сталина Эрефимовна Эйзенхауэр
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Адрес: Неаполитанская площадь, Проспек Поля-рощ 33
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Телефон: +777666321
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Кнопка
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">Город: Дальний  .</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

    </div>
  );
}
