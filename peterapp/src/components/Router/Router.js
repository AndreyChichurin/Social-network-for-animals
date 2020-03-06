import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import LogIn from '../scenes/LogIn/LogIn';
import Registration from '../scenes/Registration/Registration';
import MediaCard from '../scenes/Card/Card'


export default () => (
  <Switch>
    <Route exact path="/">
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Route>
    <Route path="/login">
      <LogIn />
    </Route>
    <Route path="/registration">
      <Registration />
    </Route>
  </Switch>
);
