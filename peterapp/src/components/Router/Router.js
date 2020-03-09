import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import LogIn from '../scenes/LogIn/LogIn';
import Registration from '../scenes/Registration/Registration';
import MediaCard from '../scenes/Card/Card'
import ControlledOpenSelect from '../Filter/filter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Bot from '../Bot/Bot/bot';
import Navbar from '../navbar'
import Home from '../cabinet'
import ImageUploader from '../../firebase/imageuploader'




export default () => (
  <BrowserRouter>
  {/* <Navbar/> */}
  <Switch>
    
    <Route exact path="/">
    <video autoPlay="autoplay" loop="loop" width="100%">
      <source src="https://storage.coverr.co/videos/Dog-in-Farm?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzNDkxNDEyfQ.dH9roTj7q-zI7a9jUyHWmQY5-DupaBftUSDYxsmbOEk" ></source>
    </video>
  
    <Grid
  container
  direction="column"
  justify="space-between"
  alignItems="flex-start">
  <div className='ContainerOne'>    
    <div className='ContainerMain'>
   
      <ControlledOpenSelect/>
      <Box display='flex' justifyContent="rigth" flexWrap="wrap">
      <ImageUploader/>
      <MediaCard />
      <Bot />
      <MediaCard />
      <MediaCard />
      </Box> 
      </div>
      </div>
      </Grid>
    </Route>
    <Route path='/home'>
      <Home/>
    </Route>
    <Route path="/login">
      <LogIn />
    </Route>
    <Route path="/registration">
      <Registration />
    </Route>
  </Switch>
  </BrowserRouter>
);
