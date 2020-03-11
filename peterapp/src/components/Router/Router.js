import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import LogOut from '../scenes/LogOut/LogOut';
import SignIn from '../scenes/SignIn/SignIn';
import SignUp from '../scenes/SignUp/SignUp';
import MediaCard from '../scenes/Card/Card'
import Account from '../scenes/Account/Account';
import ControlledOpenSelect from '../Filter/filter'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AnnouncementForm from '../scenes/AnnouncementForm/AnnouncementForm';



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

            <ControlledOpenSelect />
            <Box display='flex' justifyContent="right" flexWrap="wrap">
              <MediaCard 
              name="Masha" 
              age='5' 
              location = "Novosibirsk" 
              image='https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/12/20/10/istock-1128787444.jpg'
              description='Masha likes group across all continents except Antarctica'
              />
              <MediaCard 
              name="Danya"
              age='7'
              image = "https://images.unsplash.com/photo-1568564321589-3e581d074f9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              location = "Moscow"
              description='Smartest dog you ever seen, can solve not so simple tasks'
              />
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
    <Route path="/account">
      <Account />
    </Route>
    <Route path="/logout">
      <LogOut />
    </Route>
    <Route path="/announcement">
      <AnnouncementForm />
    </Route>
  </Switch>
);
