import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import LogIn from '../scenes/LogIn/LogIn';
import Registration from '../scenes/Registration/Registration';
import MediaCard from '../scenes/Card/Card'
import ControlledOpenSelect from '../Filter/filter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AnnouncementForm from '../AnnouncementForm';




export default () => (
  <Switch>
    <Route exact path="/">
    <video autoPlay="autoplay" loop="loop" width="100%">
      <source src="https://storage.coverr.co/videos/coverr-horses-1572171301897?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzNDkxNDMzfQ.or5-mTZW4XOICTAZ_6hscNv7dYdNKcF3DVZqRtfkIkI" ></source>
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
      <MediaCard />
      <MediaCard />
      <MediaCard />
      </Box> 
      </div>
      </div>
      </Grid>
    </Route>
    <Route  path="/login">
      <LogIn />
    </Route>
    <Route path="/registration">
      <Registration />
    </Route>
    <Route path="/announcement">
      <Registration />
    </Route>
    
  </Switch>
);
