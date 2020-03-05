import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

import Grid from '@material-ui/core/Grid';

import Router from './components/Router/Router';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center">

          <div className="App">
            <Router />
          </div>
        </Grid>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
