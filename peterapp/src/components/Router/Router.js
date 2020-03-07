import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import SignIn from '../scenes/SignIn/SignIn';
import SignUp from '../scenes/SignUp/SignUp';
import MediaCard from '../scenes/Card/Card'
import ControlledOpenSelect from '../Filter/filter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';




export default () => (
  <Switch>
    <Route exact path="/">
    {/* <h1 className='h'>
        Find a significant other for your pet
        </h1> */}
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
      <MediaCard />
      <MediaCard />
      <MediaCard />
      </Box> 
      </div>
      </div>
      </Grid>
    </Route>
    <Route path="/login">
      <SignIn />
    </Route>
    <Route path="/registration">
      <SignUp />
    </Route>
  </Switch>
);
