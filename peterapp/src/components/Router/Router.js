import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import SignIn from '../scenes/SignIn/SignIn';
import SignUp from '../scenes/SignUp/SignUp';
import MediaCard from '../scenes/Card/Card'


export default () => (
  <Switch>
    <Route exact path="/">
      <MediaCard />
      <MediaCard />
      <MediaCard />
    </Route>
    <Route path="/login">
      <SignIn />
    </Route>
    <Route path="/registration">
      <SignUp />
    </Route>
  </Switch>
);
