import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

<<<<<<< HEAD
import store from "./redux/store";

import "./App.css";

import Grid from "@material-ui/core/Grid";

import Navbar from "./components/navbar";
import PersonalPage from "./components/cabinet";

import LogIn from "./components/scenes/LogIn/LogIn";
import Registration from "./components/scenes/Registration/Registration";
import MediaCard from "./components/scenes/Card/Card";

import Box from "@material-ui/core/Box";

import Button from "@material-ui/core/Button";
import Router from "./components/Router/Router";
=======
// import Grid from '@material-ui/core/Grid';
import Navbar from './components/scenes/Navbar/Navbar'
// import PersonalPage from './components/cabinet';

// import Button from '@material-ui/core/Button';
import Router from './components/Router/Router';

// import ControlledOpenSelect from "./components/Filter/filter"
>>>>>>> origin/dev

import ControlledOpenSelect from "./components/Filter/filter";

function App() {
  console.log(localStorage)
  return (
<<<<<<< HEAD
    <div>
      <div>
       
       <Navbar/>
        <Router />
      </div>
      
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <video autoPlay="autoplay" loop="loop" width="100%">
              <source src="https://storage.coverr.co/videos/Dog-in-Farm?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTgzNDkxNDEyfQ.dH9roTj7q-zI7a9jUyHWmQY5-DupaBftUSDYxsmbOEk"></source>
            </video>

            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="flex-start"
            >
              <div className="ContainerOne">
                <div className="ContainerMain">
                  <ControlledOpenSelect />
                  <Box display="flex" justifyContent="rigth" flexWrap="wrap">
                    <MediaCard />

                    <MediaCard />
                    <MediaCard />
                  </Box>
                </div>
              </div>
            </Grid>
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </BrowserRouter> */}
    </div>
    //  <Navbar/>
=======
    <Provider store={store}>

      {/* <div>
        <div className="App">
        </div>
        <h2 className='log'>
          <span color='green'>
            <Button variant="contained" color="primary" href='/login'>
              Sign In
        </Button> </span>
          <span color='green'>
            <Button variant="contained" color="primary" href='/registration'>
              Sign Up
        </Button> </span>
          <span color='green'>
            <Button variant="contained" color="primary" href='/account'>
              Account
        </Button> </span>
        </h2>
      </div> */}
      <BrowserRouter>
        {/*<img src="TestLogo.jpg" className="Logo"></img> */}
        <Navbar />
        {/* <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"> */}
        <Router />
        {/* <PersonalPage/> */}
        {/* </Grid> */}
      </BrowserRouter>
    </Provider>
>>>>>>> origin/dev
  );
}

export default App;
