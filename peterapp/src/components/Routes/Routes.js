import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import LogOut from '../scenes/LogOut/LogOut';
import Autentication from '../scenes/Autentification/Autentification';
import Slider from '../scenes/LikeAppComponent/slidercomponent'
import Account from '../scenes/Account/Account'
import Bot from '../scenes/Bot/Bot/bot'

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Slider} />
      <Route path="/account" component={Account} />
      <Route path="/chat" component={Bot} />
      <Route path="/login" component={Autentication} />
      <Route path="/register" component={Autentication} />
    </Switch>
  )
}
