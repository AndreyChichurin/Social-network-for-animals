import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import IconButton from '@material-ui/core/IconButton';
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
import Person from  '../LikeAppComponent/additionalComponents/prerson.js'
import Lonely from '../LikeAppComponent/additionalComponents/lonely'


import Slider from '../Likedbyslider/slidercomponent'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(3),

//     maxWidth: 550,
//     backgroundColor: pink[50]
//   },
//   image: {
//     width: 250,
//     height: 250,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
//   button: {
//     margin: 'auto',
//     position: 'relative',
//     backgroundColor: red[300]
//   },
//   block: {
//     display: 'block',
//     margin: 'auto',
//     position: 'relative'
//   }
// }));


export default function PersonalPage() {


