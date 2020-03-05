import React from 'react';
import './App.css';
import MediaCard from './components/cards'
import Grid from '@material-ui/core/Grid';
import Navbar from './components/navbar'
import PersonalPage from './components/cabinet';




function App() {
  return (
    
    
    <Grid 
    container
    direction="column"
    justify="center"
    alignItems="center"
    >
  
    <Navbar />
    <div className="App">
      
  {/* <MediaCard />
  <MediaCard />
  <MediaCard /> */}
    </div>
    <PersonalPage/>
  </Grid>
  
  );
}

export default App;
