import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Slider from '../scenes/Defaultslider/slidercomponent'
import Account from '../scenes/Account/Account'
import Bot from '../scenes/Bot/Bot/bot'

import Autentification from '../scenes/Autentification/Autentification'
import Match from '../scenes/Match/Match'
import AccountEdit from '../scenes/AnnouncementForm/AnnouncementForm'
import LandingPage from '../scenes/LandingPage/LandingPage';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/likedby" component={Account} />
      <Route path="/chatbot" component={Bot}/>
      <Route path="/match" component={Match} />
      <Route path="/login" component={Autentification} />
      <Route path="/account" component={AccountEdit} />
      <Route path="/home" component={Slider} />
    </Switch>
  )
}
