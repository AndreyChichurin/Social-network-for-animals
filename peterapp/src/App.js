import React from 'react';


import logo from './logo.svg';


import './App.css';
import MediaCard from './components/cards'
import LogIn from './components/LogIn/LogIn'
import Registration from './components/Registration/Registration'
import Grid from '@material-ui/core/Grid';


function App() {
  return (
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center">
  

    <div className="App">

  <MediaCard />
  <MediaCard />
  <MediaCard />
    <LogIn />
    <Registration />
    </div>
  </Grid>
  );
}

export default App;
