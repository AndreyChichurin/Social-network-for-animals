import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Login from '../../scenes/Login/Login';
import Registration from '../../scenes/Registration/Registration';


export default () => (
  <Switch>
    <Route exact path="/">

    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/registration">
      <Registration />
    </Route>
  </Switch>
);
