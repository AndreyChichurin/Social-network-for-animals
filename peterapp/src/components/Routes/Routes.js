import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Slider from '../scenes/LikeAppComponent/slidercomponent'
import Account from '../scenes/Account/Account'

import Autentification from '../scenes/Autentification/Autentification'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Slider} />
      <Route path="/account" component={Account} />
      <Route path="/login" component={Autentification} />
    </Switch>
  )
}
